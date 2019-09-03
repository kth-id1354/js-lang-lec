'use strict';

// let myVar = 0;

/**
 * Illustrates a closure.
 *
 * @return {function} A closure.
 */
const outer = () => {
  let myVar = 1;
  const func = () => {
    console.log('inner got: ' + myVar);
    myVar = 2;
  };
  myVar = 3;
  return func;
};

const inner = outer();
// myVar = 3;
inner();
