// Create a recipe box app, where the user can search by first letter or by meal name. 
// The data will come from an api call from the website https://www.themealdb.com/api.php
// Please visit the website and try different searches beforehand. 

// When the user presses the search button, the data from the api is put into a table. Please refer
// to the screenshots. 

// If the checkboxes are selected, and the user presses the "more info" button, then the cooking
// instructions appear below the table, and the button disappears. 

// As always, you must include comments to recieve marks on this assignment. No comments = no marks.
// You are NOT allowed to modify the CSS or HTML file.
// You are NOT allowed to use concepts that we have not covered in class. If you need clarification,
// please message me. 

// Function to fetch meals dynamically based on search input
// Function to fetch meals dynamically based on search input
async function getMeals(searchQuery, searchByLetter = true) {
    let apiUrl;
    
    // Check if the search is based on a letter or full meal name
    if (searchByLetter) {
        // If searching by first letter, build the API URL accordingly
        apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchQuery}`;
    } else {
        // If searching by meal name, build the API URL accordingly
        apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`;
    }

    // Fetch data from the API
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Clear previous table data before populating with new results
    document.getElementById("mealTable").innerHTML = "";

    // If no meals are found, alert the user and return
    if (!data.meals) {
        alert("No meals found. Try a different search!");
        return;
    }

    // Create the table header dynamically (meal name, category, area, and more info)
    let headerRow = document.createElement("tr");
    let header1 = document.createElement("th");
    header1.innerHTML = "Meal Name";
    let header2 = document.createElement("th");
    header2.innerHTML = "Category";
    let header3 = document.createElement("th");
    header3.innerHTML = "Area";
    let header4 = document.createElement("th");
    header4.innerHTML = "More Info";
    
    // Append headers to the table
    let mealTable = document.getElementById("mealTable");
    mealTable.appendChild(headerRow);
    headerRow.appendChild(header1);
    headerRow.appendChild(header2);
    headerRow.appendChild(header3);
    headerRow.appendChild(header4);

    // Loop through meals in the API response and populate the table with meal details
    data.meals.forEach(meal => {
        let row = mealTable.insertRow(); // Insert a new row in the table
        let col1 = row.insertCell();    // Insert first column (meal name)
        let col2 = row.insertCell();    // Insert second column (meal category)
        let col3 = row.insertCell();    // Insert third column (meal area)
        let col4 = row.insertCell();    // Insert fourth column (checkbox for more info)

        // Set the content for each column
        col1.innerHTML = meal.strMeal;  // Meal name
        col2.innerHTML = meal.strCategory; // Meal category
        col3.innerHTML = meal.strArea;  // Meal area (origin)
        col4.innerHTML = `<input type='checkbox' class='infoCheckbox' data-id='${meal.idMeal}'>`; // Checkbox for selection
    });
}

// Event listener for search button click to trigger meal search
document.getElementById("findItem").addEventListener("click", function () {
    let searchInput = document.getElementById("searchItem").value.trim(); // Get the search input value

    // If search input is empty, alert the user
    if (searchInput === "") {
        alert("Please enter a search term.");
        return;
    }

    // Check if the search is based on the first letter or full name
    let searchByLetter = document.getElementById("searchLetter").checked;
    // Call getMeals function with the search query and search type
    getMeals(searchInput, searchByLetter);
});

// Event listener for "More Info" button click to show instructions for selected meals
document.querySelector("button").addEventListener("click", function () {
    const selectedMeals = document.querySelectorAll(".infoCheckbox:checked"); // Get all selected meal checkboxes
    const infoContainer = document.createElement("div"); // Create a container for meal info

    // If no meals are selected, alert the user to select at least one meal
    if (selectedMeals.length === 0) {
        alert("Select at least one meal to view instructions.");
        return;
    }

    // Loop through each selected meal to fetch and display its instructions
    selectedMeals.forEach(async (checkbox) => {
        const mealId = checkbox.getAttribute("data-id"); // Get the meal ID from the checkbox
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`); // Fetch meal details using the meal ID
        const data = await response.json();
        const meal = data.meals[0]; // Extract the meal data from the response

        // Create a new div to display meal instructions
        const mealCard = document.createElement("div");
        mealCard.classList.add("meal-card"); // Adding class for styling
        mealCard.innerHTML = `
            <h3>${meal.strMeal}</h3> <!-- Meal name -->
            <p>${meal.strInstructions}</p> <!-- Meal instructions -->
            <hr>
        `;
        // Append the meal card to the info container
        infoContainer.appendChild(mealCard);
    });

    // Append the info container with meal details to the body of the page
    document.body.appendChild(infoContainer);
    // Hide the "More Info" button after it is clicked
    this.style.display = "none";
});

// BONUS: Can you make it display additional information when the "More Info" button is clicked?