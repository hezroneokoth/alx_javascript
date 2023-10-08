#!/usr/bin/node

console.log("Start of the execution queue");

// setTimeout schedules the func to be executed after the loop & code
setTimeout(function() {
    console.log("Final code block to be executed");
}, 0);

/* Iterates 100 times,
with each iteration logging the iteration no to the console. */
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

console.log("End of the loop printing");