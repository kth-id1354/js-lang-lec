'use strict';

function extraArg() {
    const sum = sumAll(2, 4, 6, 8, 100);
    console.log(sum);
}

function sumAll() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

