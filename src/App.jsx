import { useState } from "react";
// import Navbar from "react-bootstrap/Navbar";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Test page</h1>
      <Navbar />
    </div>
  );
}

export default App;
