#!/usr/bin/node

// script that gets webpage contents & stores it in file
const fs = require('fs');
const request = require('request');
const url = process.argv[2];
const filePath = process.argv[3];

request.get(url, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
        return;
    }

    fs.writeFile(filePath, body, 'utf-8', (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log(`Contents of ${url} saved to ${filePath}`);
        }
    });
});