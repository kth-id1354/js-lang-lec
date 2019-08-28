'use strict';

function useClosure() {
    let myVar = 0;
    
    function outer() {
        myVar = 1;
        let func = function () {
            alert("inner got: " + myVar)
        };
        myVar = 2;
        return func;
    }
    
    let inner = outer();
    myVar = 3;
    inner();
}
