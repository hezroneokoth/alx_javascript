#!/usr/bin/node

/* Func changes the CSS style of the whole page according to the args included,
each time it is called*/
function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = `${size}px`;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}

/* Func main has 3 closures
The variables are created thru func changeMode. */
function main() {
    let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    let welcomeParagraph = document.createElement('p');
    welcomeParagraph.textContent = 'Welcome Holberton!';
    document.body.appendChild(welcomeParagraph);

    /* These blocks add 3 buttons
    that changes the theme of the page to the themes created above each time they are clicked */
    let spookyButton = document.createElement('button');
    spookyButton.textContent = 'Spooky';
    spookyButton.addEventListener('click', spooky);
    document.body.appendChild(spookyButton);

    let darkModeButton = document.createElement('button');
    darkModeButton.textContent = 'Dark mode';
    darkModeButton.addEventListener('click', darkMode);
    document.body.appendChild(darkModeButton);

    let screamModeButton = document.createElement('button');
    screamModeButton.textContent = 'Scream mode';
    screamModeButton.addEventListener('click', screamMode);
    document.body.appendChild(screamModeButton);
}

// The func is called to execute the above code
main();