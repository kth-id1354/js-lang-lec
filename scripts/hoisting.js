'use strict';

function tryHoisting() {
    var x = 5;
    var sum = x + y;
    var y = 7;
    console.log(sum);
}