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
  if (a < 5) {
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
var x = 3;
let y = 1;
const z = 10;
const z; // SyntaxError
let y;
let y = 6; // SyntaxError`,

    hoisting: `c) Hoisting - variables are moved to the top of their scope
console.log(a); // undefined
var a = 10;

console.log(b); // ReferenceError
let b = 20;

console.log(c); // ReferenceError
const c = 30;

greet();
function greet() {
  console.log("Hi!");
}`,

    constObjects: `d) Const & Object Mutation
const student = { name: "Victoria", role: "Student" };
student.name = "Victoria Iacob";
console.log(student);
student = { name: "hei", role: "hei" } // TypeError: assignment to constant variable`,
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
