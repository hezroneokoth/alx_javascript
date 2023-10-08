#!/usr/bin/node

/* This module contains 2 varibales
privateScore set to 0
and name set to null. */
const studentHogwarts = (function() {
    let privateScore = 0;
    let name = null;

    /* this private method takes points in agrument
    and adds it to privateScore */
    function changeScoreBy(points) {
        privateScore += points;
    }

    //  takes newName into arg then sets the private variable name
    function setName(newName) {
        name = newName;
    }

    // calls method changeScoreBy with 1
    function rewardStudent() {
        changeScoreBy(1);
    }

    // calls method changeScoreBy with -1
    function penalizeStudent() {
        changeScoreBy(-1);
    }

    // returns the name with the score e.g. Harry: 14
    function getScore() {
        return `${name}: ${privateScore}`;
    }

    return {
        setName,
        rewardStudent,
        penalizeStudent,
        getScore
    };
})();

/* Variable Harry an instance of studentHogwarts

Sets the name of the object to Harry
Rewards the student four times
Logs to the console the name and score. */
let harry = Object.create(studentHogwarts);
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

/* Variable draco an instance of studentHogwarts

Sets the name of the object to Draco
Rewards the student one time
Penalizes the student three times
Logs to the console the name and score. */
let draco = Object.create(studentHogwarts);
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());