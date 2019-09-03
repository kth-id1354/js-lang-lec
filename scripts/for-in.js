'use strict';

const person = {name: 'Stina', age: 57};

for (const property in person) {
    console.log(property + ': ' + person[property]);
}

for (const [key, value] of Object.entries(person)) {
  console.log(key + ': ' + value);
}
