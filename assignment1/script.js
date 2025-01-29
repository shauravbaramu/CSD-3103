//Question 1
// Function to remove all Textfields, their labels, and <br> tags from the webpage
function removeTextfield() {
    document.querySelectorAll('.textfield label, .textfield input, .textfield br').forEach(element => element.remove());
    document.getElementById('add').style.display = 'inline-block';
}

function addTextfield() {
    const textfieldContainer = document.querySelector('.textfield');
    textfieldContainer.innerHTML = `
        <label for="input">Enter a Text</label>
        <input type="text" id="textfield1" placeholder="Enter a Text"><br><br>
        <label for="input">Enter a Text</label>
        <input type="text" id="textfield1" placeholder="Enter a Text"><br><br>
        <label for="input">Enter a Text</label>
        <input type="text" id="textfield1" placeholder="Enter a Text"><br>
    `;
    document.getElementById('add').setAttribute('hidden', true);
}

//QUESTION 2
// Function to create and append a paragraph with specific styles
function createAndAppendParagraph() {
    const paragraph = document.createElement('p');
    paragraph.textContent = 'New Paragraph Added';
    paragraph.style.color = 'green';
    paragraph.style.fontSize = '12px';  
    paragraph.style.textAlign = 'center';
    document.body.appendChild(paragraph);
}

//QUESTION 3
// Function to remove an element by its id and show an error message if not found
function removeElementById(id) {
    const element = document.getElementById(id);
    const button = document.getElementById('removeById');
    const errorMessage = document.createElement('p');
    errorMessage.style.color = 'red';
    errorMessage.style.fontSize = '12px';
    errorMessage.style.textAlign = 'center';

    if (element) {
        element.remove();
        
    } else {
        errorMessage.textContent = `Element with id "${id}" not found.`;
        button.parentNode.insertBefore(errorMessage, button);
    }
}

// Example usage
removeElementById('textfield1'); // This will remove the element with id 'textfield1' if it exists


//QUESTION 4
// Add click event to the "Click Me" button to add a paragraph
document.getElementById('clickMeButton').addEventListener('click', createAndAppendParagraph);


//QUESTION 5
// Function to handle hover and click events for the "Hover Your Mouse Here" button
function handleHoverButtonEvents(button) {
    button.addEventListener('mouseover', function() {
        button.style.backgroundColor = 'red';
    });

    button.addEventListener('mouseout', function() {
        button.style.backgroundColor = '';
    });

    button.addEventListener('click', function() {
        const newButton = button.cloneNode(true);
        handleHoverButtonEvents(newButton);
        button.parentNode.appendChild(newButton);
    });
}


//QUESTION 5
// Add hover and click events to the initial "Hover Your Mouse Here" button
const hoverButton = document.getElementById('hoverButton');
handleHoverButtonEvents(hoverButton);


//QUESTION 6
// Function to update the coordinates of the mouse pointer
function updateCoordinates(event) {
    const coordinatesDiv = document.getElementById('question6');
    coordinatesDiv.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
}

// Add mousemove event listener to update the coordinates
document.addEventListener('mousemove', updateCoordinates);


//QUESTION 7
// Function to create a table with r rows and c columns filled with random numbers
function createTable() {
    const rows = document.getElementById('rows').value;
    const columns = document.getElementById('columns').value;

    if (rows <= 0 || columns <= 0) {
        alert('Please enter valid positive integers for rows and columns.');
        return;
    }

    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = ''; // Clear any existing table

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Create table header
    const headerRow = document.createElement('tr');
    for (let c = 0; c < columns; c++) {
        const th = document.createElement('th');
        th.textContent = `Header ${c + 1}`;
        headerRow.appendChild(th);
    }
    thead.appendChild(headerRow);

    // Create table body
    for (let r = 0; r < rows; r++) {
        const row = document.createElement('tr');
        for (let c = 0; c < columns; c++) {
            const td = document.createElement('td');
            td.textContent = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
            row.appendChild(td);
        }
        tbody.appendChild(row);
    }

    table.appendChild(thead);
    table.appendChild(tbody);
    tableContainer.appendChild(table);
}

// Add click event listener to the "Create Table" button
document.getElementById('createTableButton').addEventListener('click', createTable);