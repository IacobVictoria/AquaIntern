import { useState } from "react";

const ArrayMethods = () => {
  const [output, setOutput] = useState("");

  const runCode = () => {
    const logs = [];

    const daysOfWeek = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    logs.push("ES6 Array Methods on Weekdays\n");

    // find()
    logs.push("- find(): First day starting with 'T'");
    logs.push(`Code: daysOfWeek.find(day => day.startsWith("T"))`);
    logs.push(`Result: ${daysOfWeek.find((day) => day.startsWith("T"))}\n`);

    // findIndex()
    logs.push("- findIndex(): First index of day longer than 6 characters");
    logs.push(`Code: daysOfWeek.findIndex(day => day.length > 6)`);
    logs.push(`Result: ${daysOfWeek.findIndex((day) => day.length > 6)} (${daysOfWeek[daysOfWeek.findIndex((day) => day.length > 6)]})\n`);

    // includes()
    logs.push("- includes(): Checks if 'Sunday' is in the array");
    logs.push(`Code: daysOfWeek.includes("Sunday")`);
    logs.push(`Result: ${daysOfWeek.includes("Sunday")}\n`);

    // some()
    logs.push("- some(): Is there at least one day starting with 'W'?");
    logs.push(`Code: daysOfWeek.some(day => day.startsWith("W"))`);
    logs.push(`Result: ${daysOfWeek.some((day) => day.startsWith("W"))}\n`);

    // every()
    logs.push("- every(): Do all days end with 'y'?");
    logs.push(`Code: daysOfWeek.every(day => day.endsWith("y"))`);
    logs.push(`Result: ${daysOfWeek.every((day) => day.endsWith("y"))}\n`);

    // fill()
    logs.push("- fill(): A full week of work");
    logs.push(`Code: new Array(7).fill("Working")`);
    logs.push(`Result: ${JSON.stringify(new Array(7).fill("Working"))}\n`);

    // reduce()
    const combinedDays = daysOfWeek.reduce(
      (acc, current) => acc + " | " + current
    );
    logs.push("- reduce(): Combine all days into one string");
    logs.push(`Code: daysOfWeek.reduce((accumulator, currentDay) => {
                return accumulator + " | " + currentDay;
                });`);
    logs.push(`Result: ${combinedDays}\n`);

    setOutput(logs.join("\n"));
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>ES6 Array Methods</h2>

      <div style={{ marginBottom: "1rem" }}>
        <label>Input Array:</label>
        <input
          type="text"
          disabled
          value={`[ "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",]`}
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
        />
      </div>

      <button onClick={runCode} style={{ padding: "0.5rem 1rem", border: "none",  borderRadius: "6px",  }}>
        ▶️ Run
      </button>

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
        {output || "Click Run to see results here..."}
      </pre>
    </div>
  );
};

export default ArrayMethods;
