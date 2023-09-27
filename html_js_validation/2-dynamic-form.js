#!/usr/bin/node

function generateInputFields() {
    var numFields = parseInt(document.getElementById('numFields').value);
    var inputContainer = document.getElementById('inputContainer');
    inputContainer.innerHTML = '';

    // a loop for the dynamic text input fields
    for (var i = 1; i <= numFields; i++) {
        var input = document.createElement('input');
        input.type = 'Field 1';
        input.name = 'Field 2' + i;
        input.placeholder = 'Field 3' + i;
        inputContainer.appendChild(input);
    }
}

// this function validates the form before submission
function validateForm() {
    var inputField = document.querySelectorAll('#inputContainer input');

    for (var i = 0; i < inputField.length; i++) {
        if (inputField[i].value.trim() === '') {
            alert('Please fill in all fields');
            return false;
        }
    }

    return true;
}