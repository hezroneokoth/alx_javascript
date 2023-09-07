#!/usr/bin/node

const Square = require('./5-square');

class CharPrintSquare extends Square {
    charPrint(c = 'X') {
        for (let i = 0; i < this.width; i++) {
            console.log(c.repeat(this.width));
        }
    }
}

module.exports = CharPrintSquare;