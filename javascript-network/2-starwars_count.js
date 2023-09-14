#!/usr/bin/node

const request = require('request');
const apiUrl = process.argv[2];
request.get(apiUrl, (error, response, body) => {
    if (error) {
        console.error(error);
        return;
    }
    const moviesData = JSON.parse(body).results;
    const WedgeAntillesCharacter = moviesData.filter(movie =>
        movie.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')
    );
    console.log(WedgeAntillesCharacter.length);
});