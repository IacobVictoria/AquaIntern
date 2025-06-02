import { useState, useRef, useEffect } from "react";

function InternshipFormWithRefs() {
  //useState Hook allows us to track state in a function component
  //Every time the state is updated (like when typing into the input)
  //React re-renders the entire component to reflect the new state.

  //useRef Hook allows you to persist values between renders

  const [name, setName] = useState(""); //this re-renders the page on each set, so the useEffect is called
  const [age, setAge] = useState("");

  //1.  Stores a value that persists between renders without causing a re-render when updated
  const messageRef = useRef("You are not registered yet.");

  // 2. Accesses a DOM element directly
  //A ref used for DOM access allows you to directly interact with a specific HTML element without re-rendering
  const nameInputRef = useRef(null);
  const ageInputRef = useRef(null);

  // 3. Stores the previous value of the input across renders
  const previousNameRef = useRef("");

  const likeCountRef = useRef(0);

  console.log("re render page");

  const handleLike = () => {
    likeCountRef.current += 1;
    console.log(`Likes: ${likeCountRef.current}`);
  };
  //useEffect is a React Hook that lets you run side effects after the component renders

  useEffect(() => {
    console.log("use effect");
    previousNameRef.current = name;
  }, [name]); //The effect depends on the dependency array runs, when the name changes

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      nameInputRef.current?.focus(); 
      return;
    }

    if (!age) {
      ageInputRef.current?.focus();
      return;
    }

    messageRef.current = `${name}, you are successfully registered!`;
    setName("");
    setAge("");
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>Internship Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label>
            Name:{" "}
            <input
              ref={nameInputRef} // DOM access
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </label>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>
            Age:{" "}
            <input
              type="number"
              ref={ageInputRef}
              value={age}
              onChange={(e) => setAge(e.target.value)} //re -render page
              placeholder="Enter your age"
            />
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>

      <div style={{ marginTop: "2rem", fontWeight: "bold" }}>
        Render message: {messageRef.current}
      </div>

      <div style={{ marginTop: "1rem" }}>
        Previous name: <strong>{previousNameRef.current}</strong>
      </div>
      <div>
        <h4>Like this page</h4>
        <button onClick={handleLike}>👍 Like</button>
        <p>The result in console.</p>
      </div>
    </div>
  );
}

export default InternshipFormWithRefs;
