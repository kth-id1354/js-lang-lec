function forIn() {
    const person = {name: "Stina", age: 25};
    for (let prop in person) {
        alert(prop + ": " + person[prop]);
    }
}
