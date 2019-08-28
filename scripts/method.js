'use strict';

function useMet() {
    const person = new Person("Olle");
    console.log(person);
    person.changeName("Pelle");
    console.log(person);
}

function Person(firstname) {
    this.name = firstname;
    this.changeName = function (name) {
        this.name = name;
    }
}
