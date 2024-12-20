//complete this code
class Person {
  constructor(name, age) {
    this._name = name;  // Private variable to store name
    this._age = age;    // Private variable to store age
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for age
  set age(age) {
    this._age = age;
  }

  // Getter for age (optional, to retrieve age if needed)
  get age() {
    return this._age;
  }
}

// Student class extends Person
class Student extends Person {
  constructor(name, age) {
    super(name, age);  // Call the Person constructor
  }

  // Method to log that the student is studying
  study() {
    console.log(`${this.name} is studying`);
  }
}

// Teacher class extends Person
class Teacher extends Person {
  constructor(name, age) {
    super(name, age);  // Call the Person constructor
  }

  // Method to log that the teacher is teaching
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

