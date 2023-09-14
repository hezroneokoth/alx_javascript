#!/usr/bin/node

const request = require('request');
const movieId = process.argv[2];
const apiUrl = `https://swapi.dev/api/films/${movieId}/`;
request(apiUrl, (error, response, body) => {
    if (error) {
        console.error(error);
        return;
    }
    const film = JSON.parse(body);
    const xctersUrls = film.xcters;

    xctersUrls.forEach(xcterUrl => {
        request(xcterUrl, (error, response, body) => {
            if (error) {
                console.error(error);
                return;
            }
            const xcter = JSON.parse(body);
            console.log(xcter.name);
        });
    });
});