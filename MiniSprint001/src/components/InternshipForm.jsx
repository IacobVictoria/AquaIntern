import { useState, useRef } from "react";

function InternshipForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(""); //track the input value

  const messageRef = useRef("You are not registered yet."); //keeping values between renders without updating the UI directly

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && age) {
      messageRef.current = `${name} you are successfully registered!`;
      setName("");
      setAge("");
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <div
        style={{
          marginBottom: "2rem",
          background: "#f0f8ff",
          padding: "1rem",
          borderRadius: "8px",
        }}
      >
        <h3>🧩 React Hooks Used</h3>

        <div>
          <strong>🔹 useState:</strong> <br />
          Allows you to <b>track and update values</b> over time in a functional
          component.
          <br />
          <em>Example:</em> We use it to track the name and age typed by the
          user.
          <br />
          <br />
          <strong>🔹 useRef:</strong> <br />
          Allows you to <b>store a value that persists</b> between renders 
          <b> without triggering a re-render</b>.
          <br />
          <em>Example:</em> We use it to store the message shown after form
          submission. Unlike `useState`, updating it doesn't re-render the
          component.
        </div>
      </div>
      <h2>Internship Register Form</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label>
            Name:{" "}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
            />
          </label>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>
            Age:{" "}
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)} //set the new value using set method whenever you update the input in any way
              placeholder="Enter age"
            />
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>

      <div style={{ marginTop: "2rem", fontWeight: "bold" }}>
        {messageRef.current}
      </div>
    </div>
  );
}

export default InternshipForm;
