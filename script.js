//complete this code
class Person {
  constructor(name, age) {
    this._name = name;
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

  // Getter for age
  get age() {
    return this._age;
  }
}

// Student subclass that extends Person
class Student extends Person {
  constructor(name, age) {
    super(name, age);
  }

  // Method to log that the student is studying
  study() {
    console.log(`${this.name} is studying`);
  }
}

// Teacher subclass that extends Person
class Teacher extends Person {
  constructor(name, age) {
    super(name, age);
  }

  // Method to log that the teacher is teaching
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;