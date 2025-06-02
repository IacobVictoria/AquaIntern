const ClosureComponent = () => {
  const codeExample = `8. Closures

A closure is a function that remembers variables from its outer scope

function sayHi(name) {
  return function greet() {
    console.log("Hi, " + name + "! Welcome to the internship!");
  };
}

const greetVictoria = sayHi("Victoria");
greetVictoria(); 

function countingNumbers() {
  let nr = 0;  // outer scope
  return function () {
    nr++;  // remembers the number value
    console.log("Nr:", nr);
  };
}

const counting = countingNumbers();
counting(); 
counting(); 
counting(); `;

  const outputExample = `
Hi, Victoria! Welcome to the internship!
Nr: 1
Nr: 2
Nr: 3`;

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>JavaScript Closures</h2>

      <h3 style={{ marginTop: "1rem" }}>Code:</h3>
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
        {codeExample}
      </pre>

      <h3 style={{ marginTop: "2rem" }}>Output:</h3>
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
        {outputExample}
      </pre>
    </div>
  );
};

export default ClosureComponent;
