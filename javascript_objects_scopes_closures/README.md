# JavaScript - Objects, Scopes and Closures

## JavaScript

## Learning Objectives

### General

1. Why JavaScript programming is amazing
2. Why JavaScript programming is amazing
3. How to create an object in JavaScript
4. What this means
5. What undefined means
6. Why the variable type and scope is important
7. What is a closure
8. What is a prototype
9. How to inherit an object from another

## Requirements

### Python Scripts

1. Recommended editors: Visual studio code
2. All your files will be interpreted on Ubuntu 20.04 LTS using node (version 14.x)
3. All your files should end with a new line
4. A README.md file, at the root of the folder of the project, is mandatory
5. Your code should be semistandard compliant (version 14.x.x). Rules of Standard + semicolons on top. Also as reference: AirBnB style
6. The length of your files will be tested using wc
7. You are not allowed to use var

## Quiz

### Question #0

What is the output of this code?

    function myFunction(a) {

        console.log(a);

    }

    const number = 12;

    myFunction(number);

12

### Question #1

What is the output of this code?

    function myFunction(a) {
    
        console.log(a);

    }

    myFunction(12);

12

### Question #2

What is the output of this code?

    let b = 1;


    function myFunction(a) {
    
        console.log(a + b);
    
        b = a;

    }


    myFunction(3);

    myFunction(4);

4, 7

### Question #3

What is the output of this code?

    function myFunction(a) {
    
        console.log(a);

    }


    const a = 12;

    myFunction(89);

89

### Question #4

What is the output of this code?

    const number = 12;

    function myFunction(a) {
    
        console.log(a);

    }


    myFunction(number);

12

### Question #5

What is the output of this code?

    function myFunction(a) {
    
        console.log(a + b);

    }


    const b = 79;

    myFunction(10);

89

### Question #6

What is the output of this code?

    const b = 79;

    function myFunction(a) {
    
        console.log(a + b);

    }


    myFunction(10);

89

### Question #7

What is the output of this code?

    const a = 12;

    function myFunction(a) {
    
        console.log(a);

    }


    myFunction(89);

89

## Tasks

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