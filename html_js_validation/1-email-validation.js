#!/usr/bin/node

function validateEmail() {
    var email = document.getElementById('email').value;
    var errorCheck = document.getElementById('error');

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // checks if the email follows standard email format
    if (!emailRegex.test(email)) {
        errorCheck.textContent = "Please enter a valid email address.";
        return false;
    }

    // if all criteria are met it allows for submission
    errorCheck.textContent = "";
    return true;
}