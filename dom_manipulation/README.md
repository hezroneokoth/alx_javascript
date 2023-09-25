# JS HTML DOM manipulation

## HTML      JavaScript

## General Objectives

1. Understand the Document Object Model (DOM)
2. Access and Manipulate Elements with JavaScript
3. How to use CSS selectors and traverse the DOM tree
4. How to work with event listeners/handlers

## Brief Introduction

### What is the Document Object Model (DOM)?

The Document Object Model, often referred to as the DOM, is a crucial concept in web development. It forms the bridge between web pages and the JavaScript language, enabling you to interact with and manipulate the content and structure of a webpage in real-time. Understanding the DOM is like gaining the keys to the inner workings of a website.

### Access and Manipulate Elements with JavaScript

One of the core skills that you need to develop as a web developer is the ability to access and manipulate HTML elements using JavaScript. Whether it’s changing the text within a paragraph, updating an image, or altering the style of an element, you’ll need to gain the power to make dynamic changes to web pages.

### Using CSS Selectors and Traversing the DOM Tree

You should also master the art of using CSS selectors to pinpoint specific HTML elements within a page. Understanding how to traverse the DOM tree will enable you to navigate between elements, their parents, and their children with ease. With knowledge of this, you will be able to target the right element for modification or interaction.

### Working with Event Listeners/Handlers

No interactive web application is complete without event handling. You’ll need to learn how to capture user interactions, such as clicks and keystrokes, and respond to them using event listeners and handlers. This skill will open doors to building engaging and responsive web experiences.

## General Requirements

1. Recommended editors: Visual studio code
2. All your files should end with a new line
3. A README.md file, at the root of the folder of the project, is mandatory
4. You are not allowed to use var

## Tasks

### 0. Play with the DOM

Write a JavaScript program that demonstrates the basic concept of the DOM by accessing and modifying an HTML element.

Use the HTML code below as the starting point and add your JavaScript code as an internal <script> tag:

    <!DOCTYPE html>

    <html>

    <head>
  
        <title>DOM Introduction</title>

    </head>

    <body>
  
        <p id="myParagraph">This is a paragraph.</p>

    </body>

    </html>

Write JavaScript code to select the element using its id and store it in a variable

Use the DOM API to modify the content of the <p> element to I successfully updated this paragraph with javascript

Make use of document.getElementById

Verify that the program successfully modifies the element content when the HTML file is opened in a browser.

### 1. Selecting HTML Elements Using Selectors

Write a JavaScript program that demonstrates the use of selectors to select specific HTML elements.

Use the HTML code below as the starting point and add your JavaScript code as an internal <script> tag:

    <!DOCTYPE html>

    <html>

    <head>
  
        <title>Selecting Elements</title>
  
        <style>
    
            .highlight {
      
                color: red;
    
            }

        </style>

    </head>

    <body>
  
        <p class="highlight">This is a highlighted paragraph.</p>
  
        <p>This is a normal paragraph.</p>

    </body>

    </html>

Use the DOM API to modify the format of the <p class="highlight"> element to make the content boldened

Make use of document.querySelectorAll

Verify that the program successfully modifies the element content when the HTML file is opened in a browser.

### 2. Modifying Element Content, Attributes, and Styles

Write a JavaScript program that demonstrates the use of selectors to select specific HTML elements.

Use the HTML code below as the starting point and add your JavaScript code as an internal <script> tag:

    <!DOCTYPE html>

    <html>

    <head>
  
        <title>Modifying Elements</title>
  
        <style>
    
            img {
      
                border: 1px solid black;
    
            }
  
        </style>

    </head>

    <body>
  
        <img id="myImage" src="https://picsum.photos/200/300" alt="My Image">

    </body>

    </html>

Write JavaScript code to select the <img> element using its id and store it in a variable.

Use the DOM API to modify the following:

the src to https://picsum.photos/200/301,

the alt to New image

the border style to 2px solid red

Make use of document.getElementById

Verify that the program successfully modifies the element content when the HTML file is opened in a browser.

### 3. Creating, Appending, and Removing Elements

Write a JavaScript program that demonstrates the creation, appending, and removal of elements using the DOM.

Use the HTML code below as the starting point and add your JavaScript code as an internal <script> tag:

    <!DOCTYPE html>

    <html>

    <head>
  
        <title>Creating and Removing Elements</title>

    </head>

    <body>
  
        <div id="container"></div>

    </body>

    </html>

Write JavaScript code to select the container element using its id and store it in a variable.

Use the DOM API to create a new <p> element, and add New paragraph as its content

Append the newly created elements to the container element.

Add a button that removes/hides the newly created paragraph when first click and shows it when clicked again

Verify that the program successfully creates, appends, and toggles elements when the HTML file is opened in a browser.

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

Manipulating documents - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents

JavaScript HTML DOM - https://www.w3schools.com/js/js_htmldom.asp