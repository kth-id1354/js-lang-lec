function constr() {
    const myMother = new Person("Fia", 48);
    for (let prop in myMother) {
        alert(prop + ": " + myMother[prop]);
    }
    // delete Person.age;
    // alert(myMother.age);
    // delete myMother.age;
    // alert(myMother.age);
    // delete myMother;
    // alert(myMother.age);
}

function Person(first, a) {
    this.firstName = first;
    this.age = a;
}
