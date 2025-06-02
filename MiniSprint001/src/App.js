import StringES6Methods from "./components/StringES6Methods";
import InternshipForm from "./components/InternshipForm";
import ArrayES6Methods from "./components/ArrayES6Methods";
import VarLetConstPlayground from "./components/VarConstLetComponent";
import SpreadOperator from "./components/SpreadOperator";
import ObjectsComponent from "./components/ObjectsComponent";
import ArrayMethods from "./components/ArrayMethods";
import PromiseCallbackComponent from "./components/PromiseCallbackComponent";
import AsyncAwaitComponent from "./components/AsyncAwaitComponent";
import ClosureComponent from "./components/ClosureComponent";

function App() {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          padding: "1rem",
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        From Noob to Dev: JavaScript Adventure
      </h1>

      <p
        style={{
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto",
          paddingBottom: "1.5rem",
          fontSize: "1.1rem",
          lineHeight: "1.6",
          color: "#555",
        }}
      >
        <strong style={{ color: "#1f7aec" }}>ES6 </strong> is a modern version of
        JavaScript that introduces powerful features like let, const, var
        , arrow functions, template strings, and new methods for arrays and
        strings — all designed to make code cleaner, shorter, and easier to
        write.
      </p>

      <StringES6Methods />
      <ArrayES6Methods />
      <VarLetConstPlayground />
      <SpreadOperator />
      <ObjectsComponent />
      <ArrayMethods />
      <PromiseCallbackComponent/>
      <AsyncAwaitComponent/>
      <ClosureComponent/>
      <InternshipForm />
    </div>
  );
}

export default App;
