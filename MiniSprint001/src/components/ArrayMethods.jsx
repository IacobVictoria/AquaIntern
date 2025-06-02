import { useState } from "react";

const ArrayMethods = () => {
  const [output, setOutput] = useState("");

  const runCode = () => {
    const logs = [];

    let daysOfWeek = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    logs.push("!!!!! Arrays in JavaScript are objects and are mutable, meaning their content can be changed.\n")

    logs.push("👉 Accessor methods (non-mutating):\n");

    // indexOf
    logs.push("- indexOf(): Get index of 'Friday'");
    logs.push(`Code: daysOfWeek.indexOf("Friday")`);
    logs.push(`Result: ${daysOfWeek.indexOf("Friday")}\n`);

    // slice
    logs.push("- slice(): Extracts days from index 1 to 3");
    logs.push(`Code: daysOfWeek.slice(1, 4)`);
    logs.push(`Result: ${JSON.stringify(daysOfWeek.slice(1, 4))}\n`);

    // join
    logs.push("- join(): Join days with ' - '");
    logs.push(`Code: daysOfWeek.join(" - ")`);
    logs.push(`Result: ${daysOfWeek.join(" - ")}\n`);

    logs.push("👉 Mutator methods (modifies array):\n");

    // pop
    logs.push("- pop(): Remove last day");
    daysOfWeek.pop();
    logs.push(`Code: daysOfWeek.pop()`);
    logs.push(`Result: ${JSON.stringify(daysOfWeek)}\n`);

    // splice
    logs.push('- splice(): Replace index 1 with "Friday"');
    daysOfWeek.splice(1, 1, "Friday");
    logs.push(`Code: daysOfWeek.splice(1, 1, "Friday")`);
    logs.push(`Result: ${JSON.stringify(daysOfWeek)}\n`);

    // push
    logs.push("- push(): Add 'ExtraDay' at end");
    daysOfWeek.push("ExtraDay");
    logs.push(`Code: daysOfWeek.push("ExtraDay")`);
    logs.push(`Result: ${JSON.stringify(daysOfWeek)}\n`);

    // reverse
    logs.push("- reverse(): Reverse array");
    daysOfWeek.reverse();
    logs.push(`Code: daysOfWeek.reverse()`);
    logs.push(`Result: ${JSON.stringify(daysOfWeek)}\n`);

    logs.push("👉 Iteration methods:\n");
    logs.push("- forEach(): Print each day in console");
    logs.push(`Code: daysOfWeek.forEach(day => console.log(day))`);
    daysOfWeek.forEach((day) => logs.push(day));
    logs.push("");

    // map
    logs.push("- map(): Convert each day to uppercase");
    logs.push(`Code: daysOfWeek.map(day => day.toUpperCase())`);
    logs.push(`Result: ${JSON.stringify( daysOfWeek.map((day) => day.toUpperCase()))}\n`);

    // filter
    logs.push("- filter(): Keep days that start with 'T'");
    logs.push(`Code: daysOfWeek.filter(day => day.startsWith("T"))`);
    logs.push(`Result: ${JSON.stringify( daysOfWeek.filter((day) => day.startsWith("T")))}\n`);

    setOutput(logs.join("\n"));
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>JavaScript Array Methods: Access, Modify & Iterate</h2>
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
      <button
        onClick={runCode}
        style={{
          padding: "0.5rem 1rem border-none",
          border: "none",
          borderRadius: "6px",
        }}
      >
        ▶️ Run Examples
      </button>

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
        {output || "Click to display results..."}
      </pre>
    </div>
  );
};

export default ArrayMethods;
