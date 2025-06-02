import React, { useState } from "react";

const VarLetConstExplanation = () => {
  const [selected, setSelected] = useState("");

  const examples = {
    scope: `a) Scope - var = function scope, let/const = block scope
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
  console.log(a); // accessible outside block
  console.log(jj); // ReferenceError
  console.log(j);  // ReferenceError
}
scope();`,

    redeclaration: `b) Redeclaration & Reassignment
var x = 1;
var x = 3; // it can be reassigned and redeclared

let y = 1;
y=6 ; // it can be reassigned
//let y;  - Sintax error , cannot re declare in same scope

{
  let y; // redeclare in other scope
  const z = 10;
}

const z = 10;
z=15; // TypeError: Assignment to constant variable.
const z; // SyntaxError redeclaration
  `,

    hoisting: `c) Hoisting - variables are moved to the top of their scope

console.log(a); //if is a 'var' variable is  undefined
var a = 10;

console.log(b); // if is a 'let' variable - ReferenceError
let b = 20;

console.log(c); // if is a 'const' variable ReferenceError
const c = 30;

Function declaration can be hoisted

greet();// no error , will find the declaration and console.log the message
function greet() {
  console.log("Hi!");
}

Function expression

sayHi(); // called before definition- ReferenceError
const sayHi = function () {
  console.log("Hi!");
};

Arrow Function

sayHiLambda(); // called before definition- ReferenceError
const sayHiLambda = () => {
  console.log("Hi again!");
};

}`,

    constObjects: `d) Const & Object Mutation

    ! You can modify the content, but not reassign the reference
    
    Object
const student = { name: "Victoria", role: "Student" };
student.name = "Victoria Iacob";
console.log(student);
Result : { name: 'Victoria Iacob', role: 'Student' }

student = { name: "hei", role: "hei" } // TypeError: assignment to constant variable

    Array
const numbers = [1, 2, 3];
numbers.push(4);
numbers[0] = 99; 
console.log(numbers); 
Result: [99, 2, 3, 4]

numbers = [5, 6, 7]; // TypeError: Assignment to constant variable`,
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
        📘 Difference between var, let, const
      </h2>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          marginBottom: "1rem",
        }}
      >
        <button onClick={() => setSelected("scope")}>🔍 Scope</button>
        <button onClick={() => setSelected("redeclaration")}>
          🔍 Redeclaration
        </button>
        <button onClick={() => setSelected("hoisting")}>🔍 Hoisting</button>
        <button onClick={() => setSelected("constObjects")}>🔍 Const</button>
      </div>

      <pre
        style={{
          background: "#f4f4f9",
          color: "#2c3e50",
          padding: "1.5rem",
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          fontSize: "0.9rem",
          lineHeight: "1.5",
        }}
      >
        <div>
          {selected
            ? examples[selected]
            : "Click a section to display example code."}
        </div>
      </pre>
    </div>
  );
};

export default VarLetConstExplanation;
