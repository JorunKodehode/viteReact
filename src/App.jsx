import { useState } from "react";
// import Navbar from "react-bootstrap/Navbar";
// components
import Navbar from "./components/Navbar";
// data
import { ArrayData } from "./components/ArrayData";
// css
import "./styles/App.css";
import "./styles/palette.css";
// import PropsVariation from "./components/propsVariation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <h1>Test page</h1>
        <img
          src="./images/iceCream.jpg"
          alt="ice cream with yellow background"
        />
        <Navbar />
        {/* <PropsVariation /> */}
      </div>
    </>
  );
}

export default App;
