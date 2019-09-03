'use strict';

/**
 * An example of default parameter value.
 *
 * @param {number} param The parameter
 */
function funcWithDefParam(param = 1) {
  console.log(param);
  console.log(typeof(param));
}

funcWithDefParam(2);
funcWithDefParam();
funcWithDefParam(undefined);
funcWithDefParam(null);
funcWithDefParam('');
