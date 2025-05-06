// main.js

// 1. First things first, let's grab the HTML elements we're going to play with using their IDs.
const courseDropdown = document.getElementById('course');
const nameInput = document.getElementById('studentName');
const idInput = document.getElementById('studentID');
const gradeInput = document.getElementById('studentGrade');
const addButton = document.getElementById('addData');
const tableBody = document.getElementById('content');

// 2. The assignment wants us to add a couple more courses to that dropdown menu.
// So, let's create the new options.
const newCourse1 = document.createElement('option');
newCourse1.value = '4830'; // This is the value that will be sent if this option is selected.
newCourse1.textContent = 'WMDD 4830'; // This is what the user will actually see in the dropdown.

const newCourse2 = document.createElement('option');
newCourse2.value = '4840'; // Another value for our second new course.
newCourse2.textContent = 'WMDD 4840'; // And the text for the user to see.

// Now we need to put these new options into the dropdown list.
courseDropdown.appendChild(newCourse1);
courseDropdown.appendChild(newCourse2);

// 3. We're going to need a way to keep track of all the students we add. An array is perfect for this!
const allStudents = [];

// 4. Let's set up what happens when the user clicks the "Submit" button.
addButton.addEventListener('click', function() {
    // Okay, the button was clicked, so let's do something!

    // 5. First, we need to get the information the user typed and selected from the form.
    const selectedCourse = courseDropdown.value;
    const studentName = nameInput.value;
    const studentId = idInput.value;
    const studentGrade = gradeInput.value;

    // 6. Now that we have all the info, let's organize it into a neat little package. An object will work great here!
    const studentInfo = {
        course: selectedCourse,
        name: studentName,
        id: studentId,
        grade: studentGrade
    };

    // 7. We've got our student's info all nice and tidy in an object. Let's add it to our list of all students.
    allStudents.push(studentInfo);

    // 8. Time to make the table on the page show the new student's info!
    updateTheTable();

    // 9. To get ready for the next student, let's clear out the form.
    nameInput.value = '';
    idInput.value = '';
    gradeInput.value = '';
    courseDropdown.value = courseDropdown.options[0].value; // Let's reset the course dropdown to the first option.
});

// 10. This function is in charge of taking the student info from our list and displaying it in the table on the page.
function updateTheTable() {
    // First, we need to make sure we're starting fresh, so let's clear out the table body.
    tableBody.innerHTML = '';

    // 11. Now, let's go through each student in our list and add a row to the table for them.
    for (let i = 0; i < allStudents.length; i++) {
        const currentStudent = allStudents[i];

        // For each student, we'll create a brand new row in the table.
        const newRow = tableBody.insertRow();

        // And for each piece of student info (course, name, ID, grade), we'll create a cell in that row.
        const courseCell = newRow.insertCell();
        const nameCell = newRow.insertCell();
        const idCell = newRow.insertCell();
        const gradeCell = newRow.insertCell();

        // Let's put the student's information into the correct cells, and make sure the course and grade look just right.
        courseCell.textContent = 'WMDD ' + currentStudent.course;
        nameCell.textContent = currentStudent.name;
        idCell.textContent = currentStudent.id;
        gradeCell.textContent = currentStudent.grade + '%';
    }
}

// 12. Just to be sure, let's update the table when the page first loads, in case there's any data already there (though it will probably be empty).
updateTheTable();