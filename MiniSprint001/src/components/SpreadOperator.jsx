import React, { useState } from "react";

const examples = {
  a: `a) Used for shallow copy

const nr = [1, 2, 3];
const nrNew = [...nr];

const obj = {
  name: "Victoria",
  details: {
    age: 22,
    city: "Bucharest",
  },
};
const objNew = { ...obj };
objNew.details.age = "45"; // the nested object is still referenced
console.log(obj); // 👉 { name: "Victoria", details: { age: "45", city: "Bucharest" } }`,

  b: `b) Used for combining arrays/objects

const class1 = ["stud1", "stud2"];
const class2 = ["stud3", "stud4"];
const allStudents = [...class1, ...class2];
console.log(allStudents); // 👉 [ "stud1", "stud2", "stud3", "stud4" ]

const stud1 = { name: "Victoria" };
const stud2 = { name: "Maria" };
const VictoriaFriend = { ...stud1, ...stud2 };
console.log(VictoriaFriend); // 👉 { name: "Maria" } // 'Maria' overrides 'Victoria'`,

  c: `c) Used for passing arguments individually in functions

const elements = [1, 2];

function sumSpread(a, b) {
  return a + b;
}
console.log(sumSpread(...elements)); // 👉 3`,

  d: `d) Used for adding elements

const firstInput = [1, 2];
const nextInput = [1, ...firstInput];
console.log(nextInput); // 👉 [1, 1, 2]`,
};


const SpreadOperator = () => {
  const [selected, setSelected] = useState("");

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
        JavaScript Spread Operator
      </h2>

      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginBottom: "1rem" }}>
        <button onClick={() => setSelected("a")}>🔍 Shallow Copy</button>
        <button onClick={() => setSelected("b")}>🔍 Combine Arrays/Objects</button>
        <button onClick={() => setSelected("c")}>🔍  Spread to Function</button>
        <button onClick={() => setSelected("d")}>🔍  Add Elements</button>
      </div>

      <pre
        style={{
           background: "#f4f4f9",
          color: "#2c3e50",
          padding: "1.5rem",
          borderRadius: "8px",
          fontSize: "0.9rem",
          lineHeight: "1.5",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
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

export default SpreadOperator;
