// There are still no types, no interfaces and no notion of visibility.

/**
 * Represents a Person.
 */
class Person {
  /**
   * Creates a new instance with the specified name.
   * @constructor

   * @param {string} name The name of this person.
   */
  constructor(name) {
    this.name = name;
  }

  /**
   * @return {string} A string representation of this person.
   */
  toString() {
    return `Person(${this.name})`;
  }
}

/**
 * Represents an employee.
 */
class Employee extends Person {
  /**
   * Creates a new instance with the specified name, working at the
   * specified department.
   * @constructor
   *
   * @param {string} name The name of this employee.
   * @param {string} department The departmen where this employee is working.
   */
  constructor(name, department) {
    super(name);
    this.department = department;
  }

  /**
   * @return {string} A string representation of this employee.
   */
  toString() {
    return `Employee(${this.department}, ${super.toString()})`;
  }

  /**
   * Instantiates an employee with the specified name, working at
   * the headquarter.
   *
   * @param {string} name The name of the created employee.
   * @return {Employee} An employee working at the headquarter.
   */
  static hqEmployee(name) {
    return new Employee(name, 'headquarter');
  }
}

console.log(Employee.hqEmployee('Nisse'));
console.log(Employee.hqEmployee('Nisse').toString());
