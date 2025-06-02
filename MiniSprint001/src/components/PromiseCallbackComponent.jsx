const PromiseCallbackComponent = () => {
  const codeExample = `6. Promises and Callback

// Callback - A function passed as an argument to another function
function sayHiNewTeamMeat(name, callback) {
  console.log("Hi " + name);
  callback();
}
sayHiNewTeamMeat("Andrei", () => {
  console.log("Introduced to the team");
});

// Promise - Object representing the eventual completion/failure of an async operation
const teammateIsHardworking = false;

const checkTeamwork = new Promise((resolve, reject) => {
  if (teammateIsHardworking) {
    resolve("Finished their task on time.");
  } else {
    reject("Delayed the task");
  }
});

checkTeamwork
  .then((message) => console.log(message))
  .catch((error) => console.log(error));`;

  const outputExample = `Console Output:

Hi Andrei
Introduced to the team
Delayed the task`;

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>Promises and Callbacks</h2>

      <h3 style={{ marginTop: "1rem" }}>Code:</h3>
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

export default PromiseCallbackComponent;
