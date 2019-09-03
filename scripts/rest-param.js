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

console.log(sum(1, 2, 3, 4, 5));
