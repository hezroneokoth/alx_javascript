#!/usr/bin/node

exports.addMeMaybe = function(number, theFunction) {
    const incremented = number + 1;
    theFunction(incremented);
};