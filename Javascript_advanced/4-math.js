#!/usr/bin/node

/* This func takes an arg called firstNumber
and returns a func that takes into an arg called secondNumber
which returns the 2nd no divided by the 1st no*/
function divideBy(firstNumber) {
    return function(secondNumber) {
        return secondNumber / firstNumber;
    };
}

/* This func takes an arg called firstNumber
and returns a func that takes into an arg called secondNumber
which returns the sum of the two numbers*/
function addBy(firstNumber) {
    return function(secondNumber) {
        return firstNumber + secondNumber;
    };
}

// the closures
let addBy100 = addBy(100);
let addBy1000 = addBy(1000);
let divideBy10 = divideBy(10);
let divideBy100 = divideBy(100);

/* this is the code to be executed */
console.log(addBy100(20)); // Output displayed: 120
console.log(divideBy10(20)); // Output displayed: 2
console.log(divideBy100(200)); // Output displayed: 2
console.log(addBy1000(20)); // Output displayed: 1020