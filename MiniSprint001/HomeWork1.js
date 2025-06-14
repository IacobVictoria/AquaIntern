//1.             ES6 Methods
console.log("\nES6 Methods\n");
//STRINGS
const inputText = "First Homework as intern in JavaScript";

// includes()
//checks if the string contains a specific substring
console.log(inputText.includes("Homework")); //true

// startsWith()
// checks if the string starts with a given substring
console.log(inputText.startsWith("Hi")); // false

// endsWith()
// checks if the string ends with a given substring
console.log(inputText.endsWith("JavaScript")); // true

// repeat()
// repeats the string 3 times
const happy = "y";
console.log(happy.repeat(3));

// padStart()
// adds characters at the beginning to end up with the specific length
const IdNR = "603";
console.log(IdNR.padStart(12, "0"));

// padEnd()
// adds characters at the end
const text = "Hei";
console.log(text.padEnd(10, "yey"));
//ARRAYS
const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// find()
// finds the first item
const firstDay = daysOfWeek.find((day) => day.startsWith("T"));
console.log(firstDay);

// findIndex()
// finds index of first day longer than 6 letters
const longDayIndex = daysOfWeek.findIndex((day) => day.length > 6);
console.log(longDayIndex);

// includes()
// checks if the word Sunday is in the array
console.log(daysOfWeek.includes("Sunday")); // true

// some()
// checks if at least one day starts with W
const endsWithY = daysOfWeek.some((day) => day.startsWith("W"));
console.log(endsWithY); // true

// every()
// checks if all days end with y
const allContainA = daysOfWeek.every((day) => day.endsWith("y"));
console.log(allContainA);

// fill()
// create a week full of working
const studentWeek = new Array(7).fill("Working");
console.log(studentWeek);

//reduce()
//combines all days into a single string separated by " | "
const allDays = daysOfWeek.reduce((accumulator, currentDay) => {
  return accumulator + " | " + currentDay;
});

console.log(allDays);

//2.             Difference between var, let, and const.
console.log("\nDifference between var, let, and const\n");
//var - function-scoped
//let - variables that might be reassigned
//const -  variables that will not change

//a) In terms of SCOPE -> var = function scope,  let/const = block scope

function scope() {
  {
    var a = 10;
  }
  {
    let jj = 90;
  }
  if (a > 5) {
    let j = 5;
    let z = 5;
  }
  console.log(a); // accesible outside block
  // console.log(jj); // error refferenceError
  // console.log(j);  // error refferenceError
}
scope();

//b) In terms of re-declaration  or re-assignment
var x = 1;
var x = 3;
let y = 1;
const z = 10; // 'const' needs to be initialized
//const z; //sintax error
//z=15;//TypeError: Assignment to constant variable.
y = 6;
//let y;  - Sintax error , cannot re declare in same scope
{
  let y; // redeclare in other scope
  const z = 10;
}
//c) In terms of hoisting
//HOISTING  - variables moved to the top of their scope before the code is executed

//Declaration is hoisted, but not the assignment

console.log(newVar); // undefined
var newVar = 10;

// console.log(b); // error - ReferenceError
let b = 20;

// console.log(c); // error - ReferenceError
const c = 30;

greet();
//function declarations can be hoisted
function greet() {
  console.log("Hi!");
}

//function expression
//sayHi(); // called before definition- ReferenceError
const sayHi = function () {
  console.log("Hi!");
};

//Arrow Function
//sayHiLambda(); // called before definition- ReferenceError
const sayHiLambda = () => {
  console.log("Hi again!");
};

//d) In terms of objects modification - const

//Object

const student = { name: "Victoria", role: "Student" };
student.name = "Victoria Iacob";
console.log(student);
//student = {name: "hei", role: "hei"} // the reference cannot be reassigned

//Array

const numbersArray = [1, 2, 3];
numbersArray.push(4);
numbersArray[0] = 99;
console.log(numbersArray);
//Result: [99, 2, 3, 4]

// numbersArray = [5, 6, 7]; // TypeError: Assignment to constant variable

//3.             Spread operator.
console.log("\nSpread operator\n");
//a) Used for shallow copy

const nr = [1, 2, 3];
const nrNew = [...nr];

nrNew[1] = 30;//working with primitives
console.log('orginal '+nr);
console.log('copy '+nrNew)

const obj = {
  name: "Victoria",
  details: {
    age: 22,
    city: "Bucharest",
  },
};
const objNew = { ...obj };
objNew.name ="Alex";
objNew.details.age = "45"; // the nested object is still referenced
console.log(obj);

//b) Used for combining arrays/objects
const class1 = ["stud1", "stud2"];
const class2 = ["stud3", "stud4"];
const allStudents = [...class1, ...class2];
console.log(allStudents);

const stud1 = { name: "Victoria", age:33 };
const stud2 = { name: "Maria" };
const VictoriaFriend = { ...stud1, ...stud2 };
console.log(VictoriaFriend); //overrides

//c) Used for passing arguments individually in funcitons
const elements = [1, 2];

function sumSpread(a, b) {
  return a + b;
}
console.log(sumSpread(...elements));

//d) Used for adding elements
const firstInput = [1, 2];
const nextInput = [1, ...firstInput];
console.log(nextInput);

//4.             Objects: How to iterate over an object, deep copy.

//a) Iteration objects
console.log("\nIteration objects\n");
const studentVictoria = {
  name: "Victoria",
  age: 21,
};
for (let key in studentVictoria) {
  console.log(`${key}: ${studentVictoria[key]}`);
}

// Used  Object.keys() -> only keys, get the value using obj[key]
Object.keys(student).forEach((key) => {
  console.log(key, student[key]);
});

// Used Object.entries() -> entry = [key,value]
Object.entries(student).forEach(([key, value]) => {
  console.log(`${key} => ${value}`);
});

//b) Deep copy
//simple objects JSON.parse(JSON.stringify())
//complex objects - structuredClone()
console.log("\nDeep copy objects\n");
const originDeep = {
  name: "Victoria",
  date: new Date(),
  data: new Set([1, 2]),
};
const jsonCopy = JSON.parse(JSON.stringify(originDeep));
const structuredCopy = structuredClone(originDeep);
console.log("JSON Copy:");
console.log(jsonCopy); //date is transformed in string and data is empty

console.log("Structured Copy:");
console.log(structuredCopy); // all the data remains

//5.             Arrays - accessor, iteration, and mutator methods (which they are, how to use them).

//Accessor methods that don't change the array
console.log("\nAccessor methods\n");
// indexOf()
// gets the position of word Friday
console.log(daysOfWeek.indexOf("Friday"));

// slice()
// creates a copy [1,4)
const midWeek = daysOfWeek.slice(1, 4);
console.log(midWeek);

// join()
// joins all days with a delimitator
console.log(daysOfWeek.join(" - "));

//Mutator methods  - change the original array
console.log("\nMutator methods\n");
// push()
// add element at the end
daysOfWeek.push("Thursday");
console.log(daysOfWeek);

// pop()
// remove the last day
daysOfWeek.pop();
console.log(daysOfWeek);

// splice()
// remove 1 item at index 1 and  insert another
daysOfWeek.splice(1, 1, "Friday");
console.log(daysOfWeek);

// reverse()
// reverses the array
daysOfWeek.reverse();
console.log(daysOfWeek);

//Iteration methods
console.log("\nIteration methods\n");
const numbers = [1, 2, 3, 4, 5];

// forEach()
// prints each number
numbers.forEach((num) => console.log(num));

// map()
// change the values into double
const doubled = numbers.map((num) => num * 2);
console.log(doubled);

// filter()
// keeps only even numbers
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens);

//6.             Promises. Callback.

//Callback - A function passed as an argument to another function
function sayHiNewTeamMeat(name, callback) {
  console.log("Hi " + name);
  callback();
}
sayHiNewTeamMeat("Andrei", () => {
  console.log("Introduced to the team");
});

const registerStudent = (student, callback) => {
  console.log("Registering student...");
  setTimeout(() => {
    callback();
  }, 1000);
};

const assignCourse = (student, callback) => {
  console.log("Assigning course...");
  setTimeout(() => {
    callback();
  }, 1000);
};

const sendWelcomeEmail = (student, callback) => {
  console.log("Sending welcome email...");
  setTimeout(() => {
    callback();
  }, 1000);
};

// Callback Hell
const processStudent = (student) => {
  registerStudent(student, () => {
    assignCourse(student, () => {
      sendWelcomeEmail(student, () => {
        console.log("Everything is fine!");
      });
    });
  });
};

processStudent("Victoria");

//Promise - Object representing the eventual completion/failure of an async operation
//3 states - pending, fulfilled, rejected
//ex: api requests, chain multiple tasks
const teammateIsHardworking = false;

const checkTeamwork = new Promise((resolve, reject) => {
  if (teammateIsHardworking) {
    resolve("Finished their task on time."); // send the message to then()
  } else {
    reject("Delayed the task"); //sends the message to catch()
  }
});

checkTeamwork
  .then((message) => console.log(message))
  .catch((error) => console.log(error));

//7.             Async. Await.

console.log("\nAsync. Await\n");
//helps write asynchronous code without blocking the rest of the code execution
//async function returns a Promise object
//await only inside an async function, waits for the result
function simulateTask() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Task done!"), 1000);
  });
}

async function runTask() {
  console.log("Starting soon");
  const result = await simulateTask();
  console.log(result);
}
runTask();
console.log("hhh");

//8.             Closures.

console.log("\nClosures\n");
// = a function that remembers the variables from its outer scope
function sayHiClosure(name) {
  return function greet() {
    console.log("Hi, " + name + "! Welcome to the internship!");
  };
}

const greetVictoria = sayHiClosure("Victoria");
greetVictoria();

function countingNumbers() {
  let nr = 0; //outer scope
  return function () {
    nr++; // remembers the nr value
    console.log("Nr:", nr);
  };
}

const counting = countingNumbers();
counting(); //1
counting(); //2
counting(); //3

//9.             useState. useRef.

//useState Hook allows us to track state in a function component
//useRef Hook allows you to persist values between renders
