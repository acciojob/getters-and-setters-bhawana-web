// Base Person class
class Person {
  constructor(name, age) {
    this._name = name; // underscore prefix to indicate internal use
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for age
  set age(age) {
    this._age = age;
  }

  // Getter for age (optional if needed)
  get age() {
    return this._age;
  }
}

// Student class extending Person
class Student extends Person {
  constructor(name, age) {
    super(name, age); // Call the parent constructor
  }

  // Method to log that the student is studying
  study() {
    console.log(`${this.name} is studying`);
  }
}

// Teacher class extending Person
class Teacher extends Person {
  constructor(name, age) {
    super(name, age); // Call the parent constructor
  }

  // Method to log that the teacher is teaching
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Example usage
const person = new Person("John", 25);
console.log(person.name); // Output: John

person.age = 30;
console.log(person.age); // Output: 30

const student = new Student("Alice", 22);
student.study(); // Output: Alice is studying

const teacher = new Teacher("Bob", 40);
teacher.teach(); // Output: Bob is teaching
