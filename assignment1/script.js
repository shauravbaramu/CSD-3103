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

// Function to create and append a paragraph with specific styles
function createAndAppendParagraph() {
    const paragraph = document.createElement('p');
    paragraph.textContent = 'New Paragraph Added';
    paragraph.style.color = 'green';
    paragraph.style.fontSize = '12px';  
    paragraph.style.textAlign = 'center';
    document.body.appendChild(paragraph);
}