function inherit() {

    function Person(firstName, age) {
        this.firstName = firstName;
        this.age = age;
    }

    function Employee() {
    }
    Employee.prototype = new Person();

    const anEmployeeConstr = new Employee();
    const aPersonConstr = new Person("Fia", 48);
    const aPersonInit = {name: "Fia", age: 48};
    const aPersonCreated = Object.create(Person);
    console.log('Employee.__proto__: ' + Employee.__proto__);
    console.log('Employee.prototype: ' + Employee.prototype);
    console.log('Person.__proto__: ' + Person.__proto__);
    console.log('Person.prototype: ' + Person.prototype);
    console.log('aPersonConstr.__proto__: ' + aPersonConstr.__proto__);
    console.log('anEmployeeConstr.__proto__: ' + anEmployeeConstr.__proto__);
    console.log('aPersonInit.__proto__: ' + aPersonInit.__proto__);
    console.log('aPersonCreated.__proto__: ' + aPersonCreated.__proto__);
    console.log('Object.__proto__: ' + Object.__proto__);
    console.log('Object.__proto__.__proto__: ' + Object.__proto__.__proto__);
    console.log('Object.__proto__.__proto__.__proto__: ' + Object.__proto__.__proto__.__proto__);
    console.log('Function.__proto__: ' + Function.__proto__);
    console.log('Function.prototype: ' + Function.prototype);
    console.log('Function.__proto__.__proto__: ' + Function.__proto__.__proto__);
    console.log('Function.__proto__.__proto__.__proto__: ' + Function.__proto__.__proto__.__proto__);
}
