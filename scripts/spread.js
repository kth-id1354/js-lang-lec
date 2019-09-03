'use strict';

/**
 * Sums the specified values.
 *
 * @param  {...number} vals The values to sum.
 * @return {number} The sum of the specified values.
 */
function sum(...vals) {
  let sum = 0;
  for (const val of vals) {
    sum = sum + val;
  }
  return sum;
}

const values = [1, 2, 3, 4, 5];
console.log(sum(...values));

let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];
const str = '678';
arr1 = [...arr1, ...arr2, ...str];
console.log(arr1);

const me = {name: 'Leif', age: 56};
const myAddr = {street: 'theStreet', no: 100};
const meAndMyAddr = {...me, ...myAddr};

console.log(meAndMyAddr);
