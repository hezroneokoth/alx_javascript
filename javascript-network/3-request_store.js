#!/usr/bin/node

const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const Path = process.argv[3];
request.get(url, (error, response, body) => {
    if (error) {
        console.error(error);
        return;
    }
    fs.writeFile(Path, body, 'utf-8', (wError) => {
        if (wError) {
            console.error(wError);
            return;
        }
        console.log(`File ${Path} saved.`);
    });
});