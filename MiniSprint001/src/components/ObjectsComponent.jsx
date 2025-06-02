import React, { useState } from "react";

const examples = {
  a: `a) Iteration objects

const studentVictoria = {
  name: "Victoria",
  age: 21,
};

//for...in iterates over all keys 
for (let key in studentVictoria) {
  console.log(\`\${key}: \${studentVictoria[key]}\`);
  👉 name: Victoria
  👉 age: 21
}

// Used  Object.keys() -> only keys, get the value using obj[key]
Object.keys(studentVictoria).forEach((key) => {
  console.log(key, studentVictoria[key]);
  👉 name Victoria
  👉 age 21
});

// Used Object.entries() -> entry = [key,value]
Object.entries(studentVictoria).forEach(([key, value]) => {
  console.log(\`\${key} => \${value}\`);
  👉 name => Victoria
  👉 age => 21
});`,

  b: `b) Deep copy
//simple objects JSON.parse(JSON.stringify())
//complex objects - structuredClone()

const originDeep = {
  name: "Victoria",
  date: new Date("2023-01-01T00:00:00Z"),
  data: new Set([1, 2]),
};

const jsonCopy = JSON.parse(JSON.stringify(originDeep));
const structuredCopy = structuredClone(originDeep);

console.log("JSON Copy:");
console.log(jsonCopy);
👉 {
name: "Victoria",
date: "2023-01-01T00:00:00.000Z",  //change data into string
data: {} // does not support set
 }

console.log("Structured Copy:");
console.log(structuredCopy);
👉 {
 name: "Victoria",
 date: 2023-01-01T00:00:00.000Z,
 data: Set(2) { 1, 2 }
 }`,
};

const ObjectsComponent = () => {
  const [selected, setSelected] = useState("");

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
        Objects: Iterate & Deep Copy
      </h2>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          marginBottom: "1rem",
          flexWrap: "wrap",
        }}
      >
        <button onClick={() => setSelected("a")}>🔍 Iterate Object</button>
        <button onClick={() => setSelected("b")}>🔍 Deep Copy</button>
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
        <code>
          {selected
            ? examples[selected]
            : "Click one of the buttons above to display the code example."}
        </code>
      </pre>
    </div>
  );
};

export default ObjectsComponent;
