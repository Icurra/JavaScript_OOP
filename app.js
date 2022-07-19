console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
class Person {
  constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
  }

  removeHobby(rmHobby) {
    this.hobbies = this.hobbies.filter((hobby) => hobby != rmHobby);
  }

  greeting() {
    console.log("Hello fellow person!");
  }

  toString() {
    return Object.entries(this).toString();
  }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

class Coder extends Person {
  constructor(name, pets, residence, hobbies, occupation) {
    super(name, pets, residence, hobbies);

    this.occupation = occupation;
  }
  greeting() {
    console.log("Howdy, I'm a programmer.");
  }
}
// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
let coder = new Coder(
  "Landin",
  0,
  "Apple Valley",
  ["Video Games", "Reading", "Sleeping"],
  "Web Developer"
);
console.log(coder);

coder.removeHobby("Reading");
coder.addHobby("Tinkering");
coder.greeting();
console.log(coder.toString());
// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

class Calculator {
  result = 0;

  add(a, b) {
    let res;
    if (b == undefined) {
      res = this.result + a;
    } else {
      res = a + b;
    }
    this.result =  res;
    return this.result;
  }

  subtract(a, b) {
    let res;
    if (b == undefined) {
      res = this.result - a;
    } else {
      res = a - b;
    }
    this.result =  res;
    return this.result;
    
  }

  multiply(a, b) {
    let res;
    if (b == undefined) {
      res = this.result * a;
    } else {
      res = a * b;
    }
    this.result =  res;
    return this.result;
  }

  divide(a, b) {
    let res;
    if (b == undefined) {
      res = this.result / a;
    } else {
      res = a / b;
    }
    this.result =  res;
    return this.result;
  }

  display() {
    console.log(this.result);
  }
}
let calc = new Calculator();
calc.add(5);
calc.subtract(2)
calc.multiply(8);
calc.divide(6);
calc.display();
