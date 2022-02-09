"use strict";


let i = 1;
const countingArray = [0];

loop();

function loop() {

    // console.log(countingArray.length);
    // console.log(i);
    console.log(countingArray);
    if (countingArray.length < 9) {
        countingArray.unshift(i);
    } else {
        countingArray.unshift(i);
        countingArray.pop(-1);
    }

    if ( i < Infinity) {
        setTimeout(function () {
            i++
            loop();
        }, 1000);
    }
}