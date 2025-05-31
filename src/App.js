import { useState, useRef } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(""); //track the input value

  const messageRef = useRef("You are not registered yet.");
  //keeping values between renders without updating the UI directly

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent refreshing
    if (name && age) {
      messageRef.current = "Registered successfully!";
      setName("");
      setAge("");
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>Internship Form</h2>

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
              onChange={(e) => setAge(e.target.value)}
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

export default App;
