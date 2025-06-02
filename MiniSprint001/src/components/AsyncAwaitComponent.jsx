const AsyncAwaitComponent = () => {
  const codeExample = `7. Async. Await

Helps write asynchronous code without blocking the rest of the code execution
Async function returns a Promise object
Await only inside an async function, waits for the result

function simulateTask() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Task done!"), 1000);
  });
}

async function runTask() {
  console.log("Starting soon");
  const result = await simulateTask(); 
  console.log(result); 
}
runTask();

console.log("Does not block the execution");
`;

  const outputExample = `Starting soon

Does not block the execution

Task done!`;

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>Async / Await</h2>

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

export default AsyncAwaitComponent;
