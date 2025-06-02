const PromiseCallbackComponent = () => {
  const codeExample = `
  6. Promises and Callback

  An asynchronous function is one that performs a task in the background 
  and allows the rest of the code to continue running without waiting for the task to complete.


Callback

A callback function is simply a function that can be passed into another function as an argument,
and then, will be executed as soon as the other function is finished.

function sayHiNewTeamMeat(name, callback) {
  console.log("Hi " + name);
  callback();
}
sayHiNewTeamMeat("Andrei", () => {
  console.log("Let's introduced you to the team");
});

!!! Callbacks can be synchronous or asynchronous, depending on how and where they're used.

Nested Callbacks (Callback Hell)

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

-> It's harder to trace logic, read, maintain or handle errors in deeply nested callbacks.
Error handling -> must be done manually at each level

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

// A better approach that avoids deeply nested code -> PROMISE OBJECTS

async function processStudent(student) {
  try {
    await registerStudent(student);
    await assignCourse(student);
    await sendWelcomeEmail(student);
    console.log("All done!");
  } catch (err) {
    console.error("Something went wrong:", err);
  }
}

Error handling in Promises -> provide centralized error handling using .catch()

Promise - Object representing the eventual completion/failure of an async operation

const checkTeamwork = new Promise((resolve, reject) => {
  setTimeout(() => {
    const teammateIsHardworking = false;

    if (teammateIsHardworking) {
      resolve("Finished their task on time.");
    } else {
      reject("Delayed the task");
    }
  }, 1000); // simulate async delay using setTimeout
});

checkTeamwork
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
`;

  const outputExample = `Console Output:

Hi Andrei
Let's introduced you to the team

Registering student...
Assigning course...
Sending welcome email...
Everything is fine!

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
