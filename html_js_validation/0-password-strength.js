#!/usr/bin/node

function validatePassword() {
    var password = document.getElementById('password').value;
    var errorCheck = document.getElementById('error');

    var uppercaseRegex = /[A-Z]/;
    var lowercaseRegex = /[a-z]/;
    var digitRegex = /\d/;
    var specialCharRegex = /[$*!@%^&#]/;

    // checks if p/w is at least 8 chars in length
    if (password.length < 8) {
        errorCheck.textContent = "Password MUST be at least 8 characters long";
        return false;
    }

    // checks if p/w has atleast 1 uppercase letter
    if (!uppercaseRegex.test(password)) {
        errorCheck.textContent = "Password MUST contain at least one uppercase letter";
        return false;
    }

    // checks if p/w has at least one lowercase letter
    if (!lowercaseRegex.test(password)) {
        errorCheck.textContent = "Password MUST contain at least one lowercase letter";
        return false;
    }

    // checks is p/w has at least one numeric digit
    if (!digitRegex.test(password)) {
        errorCheck.textContent = "Password MUST contain at least one numeric";
        return false;
    }

    // checks is p/w has at least one special character
    if (!specialCharRegex.test(password)) {
        errorCheck.textContent = "Password MUST contain at least one special character ($*!@%^&#)";
        return false;
    }

    // if all criteria are met it allows for submission
    errorCheck.textContent = "";
    return true;
}