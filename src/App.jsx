import { useState } from "react";
// import Navbar from "react-bootstrap/Navbar";
// components
import Navbar from "./components/Navbar";
// data
import { ArrayData } from "./components/ArrayData";
// css
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <h1>Test page</h1>
        <Navbar />
        {/* <Card title="Dette er en variabel tittel" text="Noe tekst her" /> */}
        {/* <Destructuring /> */}
      </div>
    </>
  );
}

export default App;
