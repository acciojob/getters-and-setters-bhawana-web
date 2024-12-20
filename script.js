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

// Example usage:

// Create an instance of Person
const person = new Person("John", 25);
console.log(person.name);  // Output: John

person.age = 30;  // Setting the age using setter
console.log(person.age);  // Output: 30

// Create an instance of Student
const student = new Student("Alice", 22);
student.study();  // Output: Alice is studying

// Create an instance of Teacher
const teacher = new Teacher("Bob", 40);
teacher.teach();  // Output: Bob is teaching
