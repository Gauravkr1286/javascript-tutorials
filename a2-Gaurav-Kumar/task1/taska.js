// welcome message
alert("Welcome to our online burger shop!");

// get user burger choice
let burgerType = prompt("Please choose your burger type: chicken or beef");

// Validate burger choice
if (burgerType !== "chicken" && burgerType !== "beef") {
  // If the user enters an invalid burger type, display an error message and exit the program
  alert("Invalid burger type. Please try it again.");
} else 
{

  // Set the base cost for the burger
  let cost = 8.00;

  // Ask the user if they want to add cheese
  let addCheese = prompt("Would you like to add cheese for $2? (yes/no)");

  // If the user wants to add cheese, increase the cost
  if (addCheese === "yes") {
    cost += 2.00;
  }

  
  // Ask the user if they want to add bacon
  let addBacon = prompt("Would you like to add bacon for $3.50? (yes/no)");

  // If the user wants to add bacon, increase the cost
  if (addBacon === "yes") {
    cost += 3.50;
  }
  // Display the order summary, including the burger type, toppings, and total cost
  alert(`Your order: ${burgerType} burger with ${addCheese ? "cheese" : ""} and ${addBacon ? "bacon" : ""}. Total cost: $${cost.toFixed(2)}`);
}