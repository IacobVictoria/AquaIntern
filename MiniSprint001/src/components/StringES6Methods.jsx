import { useState } from "react";

const ES6Methods = () => {
  const inputText = "First Homework as intern in JavaScript";
  const [output, setOutput] = useState("");

  const runCode = () => {
    let logs = [];

    logs.push("ES6 String Methods Demo\n");

    // includes()
    logs.push(`- includes() - checks if a string contains a substring`);
    logs.push(`Code: inputText.includes("Homework")`);
    logs.push(`Result: ${inputText.includes("Homework")}\n`);

    // startsWith()
    logs.push(
      `- startsWith() - checks if a string starts with a specific substring`
    );
    logs.push(`Code: inputText.startsWith("Hi")`);
    logs.push(`Result: ${inputText.startsWith("Hi")}\n`);

    // endsWith()
    logs.push(
      `- endsWith() - checks if a string ends with a specific substring`
    );
    logs.push(`Code: inputText.endsWith("JavaScript")`);
    logs.push(`Result: ${inputText.endsWith("JavaScript")}\n`);

    // repeat()
    logs.push(`- repeat() - repeats the string a given number of times`);
    logs.push(`Code: inputText.repeat(2)`);
    logs.push(`Result: ${inputText.repeat(2)}\n`);

    // padStart()
    logs.push(
      `- padStart() - pads the beginning of a string to reach a target length`
    );
    logs.push(`Code: inputText.padStart(40, "-")`);
    logs.push(`Result: ${inputText.padStart(40, "-")}\n`);

    // padEnd()
    logs.push(`- padEnd() - pads the end of a string to reach a target length`);
    logs.push(`Code: inputText.padEnd(42, "!")`);
    logs.push(`Result: ${inputText.padEnd(42, "!")}\n`);

    setOutput(logs.join("\n"));
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>ES6 String Methods</h2>

      <label style={{ display: "block", marginBottom: "1rem" }}>
        Input Text:
        <input
          type="text"
          value={inputText}
          disabled
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
        />
      </label>

      <button
        onClick={runCode}
        style={{ padding: "0.5rem 1rem", border: "none", borderRadius: "6px" }}
      >
        ▶️ Run
      </button>

      <pre
        style={{
          marginTop: "1rem",
          background: "#f4f4f9",
          color: "#2c3e50",
          padding: "1.5rem",
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          fontSize: "0.9rem",
          lineHeight: "1.5",
        }}
      >
        {output || "Click Run to see results here..."}
      </pre>
    </div>
  );
};

export default ES6Methods;
