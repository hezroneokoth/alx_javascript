#!/usr/bin/node

const request = require('request');
const movieId = process.argv[2];
const apiUrl = `https://swapi.dev/api/films/${movieId}/`;
const requestOptions = {
    timeout: 60000
};

request(apiUrl, requestOptions, (error, response, body) => {
    if (error) {
        console.error(error);
        return;
    }
    const film = JSON.parse(body);
    const charactersUrls = film.characters;

    charactersUrls.forEach(characterUrl => {
        request(characterUrl, (error, response, body) => {
            if (error) {
                console.error(error);
                return;
            }
            const character = JSON.parse(body);
            console.log(character.name);
        });
    });
});