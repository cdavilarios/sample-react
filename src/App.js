import React, { useState } from "react";
import "./styles.css";

export default function App() {
  let [digits, setDigits] = useState([4, 1, 5]);

  let setDigitAtIndex = (digit, idx) => {
    setDigits([...digits.slice(0, idx), digit, ...digits.slice(idx + 1)]);
  };

  return (
    <section>
      <h1>Hello World</h1>
      <div style={{ display: "flex" }}>
        <input type="number" value={digits[0]} onChange={(event) => {}}></input>
        <input type="number" value={digits[1]}></input>
        <input type="number" value={digits[2]}></input>
        <button> Press me! </button>
      </div>
    </section>
  );
}
