# JavaScript - Warm up

## JavaScript

## General Learning Objectives

1. Why JavaScript programming is amazing
2. How to run a JavaScript script
3. How to create variables and constants
4. What are differences between var, const and let
5. What are all the data types available in JavaScript
6. How to use the if, if ... else statements
7. How to use comments
8. How to affect values to variables
9. How to use while and for loops
10. How to use break and continue statements
11. What is a function and how do you use functions
12. What does a function that does not use any return statement return
13. Scope of variables
14. What are the arithmetic operators and how to use them
15. How to manipulate dictionary
16. How to import a file

## General Requirements

1. Recommended editors: Visual studio code
2. All your files will be interpreted on Ubuntu 20.04 LTS using node (version 14.x)
3. All your files should end with a new line
4. A README.md file, at the root of the folder of the project, is mandatory
5. Your code should be semistandard compliant (version 14.x.x). Rules of Standard + semicolons on top. Also as reference: AirBnB style
6. The length of your files will be tested using wc

## More Info

### Install Node 14

    $ curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -

    $ sudo apt-get install -y nodejs

### Install semi-standard

Documentation

    $ sudo npm install semistandard --global

## Tasks

### 0. First constant, first print

Write a script that prints “JavaScript is amazing”:

You must create a constant variable called myVar with the value “JavaScript is amazing”

You must use console.log(...) to print all output

You are not allowed to use var

    guillaume@ubuntu:~/$ node 0-javascript_is_amazing.js 

    JavaScript is amazing

    guillaume@ubuntu:~/$ 

    guillaume@ubuntu:~/$ semistandard 0-javascript_is_amazing.js 

    guillaume@ubuntu:~/$ 

### 1. 3 languages

Write a script that prints 3 lines:

The first line: “C is fun”

The second line: “Python is cool”

The third line: “JavaScript is amazing”

You must use console.log(...) to print all output

You are not allowed to use var

    guillaume@ubuntu:~/$ node 1-multi_languages.js 

    C is fun

    Python is cool

    JavaScript is amazing

    guillaume@ubuntu:~/$ 

### 2. Loop to languages

Write a script that prints 3 lines: (like 1-multi_languages.js) but by using an array of string and a loop

The first line: “C is fun”

The second line: “Python is cool”

The third line: “JavaScript is amazing”

You must use console.log(...) to print all output

You are not allowed to use var

You are not allowed to use any if/else statement

You can use only one console.log

You must use a loop (while, for, etc.)

    guillaume@ubuntu:~/$ node 6-multi_languages_loop.js 

    C is fun

    Python is cool

    JavaScript is amazing

    guillaume@ubuntu:~/$ 

### 3. Object

Update this script to replace the value 12 with 89:

You are not allowed to use var

    guillaume@ubuntu:~/$ cat 12-object.js

    #!/usr/bin/node

    const myObject = {
  
        type: 'object',
  
        value: 12

    };

    console.log(myObject);

    /*

    YOUR CODE HERE

    */

    console.log(myObject);

    guillaume@ubuntu:~/$ node 12-object.js

    { type: 'object', value: 12 }

    { type: 'object', value: 89 }

    guillaume@ubuntu:~/$ 

### 4. Add file

Write a function that returns the addition of 2 integers.

The function must be visible from outside

The name of the function must be add

You are not allowed to use var

Tip

    guillaume@ubuntu:~/$ cat 13-main.js

    #!/usr/bin/node

    const add = require('./13-add').add;

    console.log(add(3, 5));

    guillaume@ubuntu:~/$ ./13-main.js

    8

    guillaume@ubuntu:~/$ 

### 5. Const or not const

Write a file that modifies the value of myVar to 333

    guillaume@ubuntu:~/$ cat 100-main.js

    #!/usr/bin/node

    myVar = 89;

    require('./100-let_me_const')

    console.log(myVar);

    guillaume@ubuntu:~/$ ./100-main.js

    333

    guillaume@ubuntu:~/$ 

Do you get it? Tweet! Post! Talk about it!

Hint: Scope

This exercise doesn’t pass semistandard so don’t worry about it.

### 6. Call me Moby

Write a function that executes x times a function.

The function must be visible from outside

Prototype: function (x, theFunction)

You are not allowed to use var

    guillaume@ubuntu:~/$ cat 101-main.js

    #!/usr/bin/node

    const callMeMoby = require('./101-call_me_moby').callMeMoby;

    callMeMoby(3, function () {
  
        console.log('C is fun');

    });

    guillaume@ubuntu:~/$ ./101-main.js

    C is fun

    C is fun

    C is fun

    guillaume@ubuntu:~/$ 

### 7. Add me maybe

Write a function that increments and calls a function.

The function must be visible from outside

Prototype: function (number, theFunction)

You are not allowed to use var

    guillaume@ubuntu:~/$ cat 102-main.js

    #!/usr/bin/node

    const addMeMaybe = require('./102-add_me_maybe').addMeMaybe;

    addMeMaybe(4, function (nb) {
  
        console.log('New value: ' + nb);

    });

    guillaume@ubuntu:~/$ ./102-main.js

    New value: 5

    guillaume@ubuntu:~/$ 

### 8. Increment object

Update this script by adding a new function incr that increments the integer value.

You are not allowed to use var

    guillaume@ubuntu:~/$ cat 103-object_fct.js

    #!/usr/bin/node

    const myObject = {
  
        type: 'object',
  
        value: 12

    };

    console.log(myObject);

    /*

    YOUR CODE HERE

    */

    myObject.incr();

    console.log(myObject);

    myObject.incr();

    console.log(myObject);

    myObject.incr();

    console.log(myObject);

    guillaume@ubuntu:~/$ ./103-object_fct.js 

    { type: 'object', value: 12 }

    { type: 'object', value: 13, incr: [Function] }

    { type: 'object', value: 14, incr: [Function] }

    { type: 'object', value: 15, incr: [Function] }

    guillaume@ubuntu:~/$ 

## Contributing

Contributions make the open-source community such an amazing place to learn, create and more. Any contributions you make are appreciated.

If you have a suggestion that would make this project better, please fork the repo and create a pull request. Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/GreatCode)
3. Commit your Changes (git commit -m 'Adding a GreatCode')
4. Push to the Branch (git push origin feature/GreatCode)
5. Open a Pull Request

## License & Copyright

Distributed under MIT license. See LICENSE.txt for more information.

In regards with copyright, all lie with the author.

## Contact

Hezrone Okoth

twitter @that_heazrone

Project Link: https://github.com/hezroneokoth/alx_javascript

## Acknowledgments

This is a list of resources that I have used during the course of this project;

ALX School Concept Page

Writing JavaScript Code - https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics

Variables - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables

Data Types - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

Operators - https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics

Operator Precedence - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

Controlling Program Flow - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling

Functions - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions

Objects and Arrays - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects

Intrinsic Objects - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects

Module patterns - http://darrenderidder.github.io/talks/ModulePatterns/#/

var, let and const - https://www.youtube.com/watch?v=sjyJBL5fkp8

JavaScript Tutorial - https://www.youtube.com/watch?v=vZBCTc9zHtI

Modern JS - https://github.com/mbeaudru/modern-js-cheatsheet

Intro Session - https://youtu.be/Oj5HFfHKBTQ