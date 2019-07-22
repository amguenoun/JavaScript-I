// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

// Example format of an intern object: 1,examples@you.edu,Example,F
const example = {
  "id": 0,
  "name": "Example",
  "email": "examples@you.edu",
  "gender": "F"
}

// Write your intern objects here:

function Intern(id, email, fName, gender) {
  this.id = id;
  this.email = email;
  this.fName = fName;
  this.gender = gender;
}

const mitzi = new Intern(1, "mmelloy0@psu.edu", "Mitzi", "F");
const kennan = new Intern(2, "kdiben1@tinypic.com", "Kennan", "M");
const keven = new Intern(3, "kmummery2@wikimedia.org", "Keven", "M");
const gannie = new Intern(4, "gmartinson3@illinois.edu", "Gannie", "M");
const antonietta = new Intern(5, "adaine5@samsung.com", "Antonietta", "F");


// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:
const log = console.log;
// Mitzi's name
log(mitzi.fName);
// Kennan's ID
log(kennan.id);
// Keven's email
log(kennan.email);
// Gannie's name
log(gannie.fName);
// Antonietta's Gender
log(antonietta.gender);
// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.

kennan.speak = () => {
  console.log(`Hello my name is Kennan!`);
}
kennan.speak();

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
antonietta.multiplyNums = (num1, num2) => num1 * num2;
console.log(antonietta.multiplyNums(3, 4));

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.


const parent = {
  name: "Susan",
  age: 70,
  speakName: function () {
    console.log(`My name is ${this.name}`);
  },
  child: {
    name: "George",
    age: 50,
    speakName: function () {
      console.log(`My name is ${this.name}`);
    },
    grandchild: {
      name: "Sam",
      age: 30,
      speakName: function () {
        console.log(`My name is ${this.name}`);
      },
    }
  }
}


// Log the parent object's name

console.log(parent.name);

// Log the child's age

console.log(parent.child.name);

// Log the name and age of the grandchild

console.log(parent.child.grandchild.name, parent.child.grandchild.age);

// Have the parent speak

parent.speakName();

// Have the child speak

parent.child.speakName();

// Have the grandchild speak

parent.child.grandchild.speakName();
