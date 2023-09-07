#!/usr/bin/node

class Rectangle {
    constructor(w, h) {
        if (w > 0 && h > 0) {
            this.width = w;
            this.height = h;

        } else {
            Object.create(null)
        }
    }
    print() {
        for (let i = 0; i < this.height; i++) {
            console.log('X'.repeat(this.width));
        }
    }
    rotate() {
        [this.width, this.height] = [this.height, this.width];
    }
}
module.exports = Rectangle