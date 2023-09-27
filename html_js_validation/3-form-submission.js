#!/usr/bin/node

document.getElementById('submitForm').addEventListener('submit', function(event) {
    event.preventDefault(); // event.preventDefault() prevents default form submission

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var messageElement = document.getElementById('message');

    // checks if both name & email fields are empty or pass the validations
    if (name.trim() === '' || email.trim() === '') {
        messageElement.textContent = "Please fill in all required fields.";
    } else {
        messageElement.textContent = "Form submitted successfully!";
    }
});