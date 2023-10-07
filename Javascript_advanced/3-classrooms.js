#!/usr/bin/node

/* the outer function takes the numberOfStudents as an arg,
then the inner fucnction called studentSeat takes seat as an arg
and returns a function that returns the seat no when called */
function createClassRoom(numberOfStudents) {
    function studentSeat(seat) {
        return function() {
            return seat;
        };
    }

    let students = [];

    /* This block creates a loop that iterates from 0
    and pushes a new function created by the studentSeat function
    into the students array after each iteration*/
    for (let i = 0; i < numberOfStudents; i++) {
        students.push(studentSeat(i + 1));
    }

    return students;
}

/* This block creates the closure with 10 students*/
let classRoom = createClassRoom(10);

/* This block calls the functions returned by studentSeat
in the classRoom array so as to get the seat nos*/
console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());