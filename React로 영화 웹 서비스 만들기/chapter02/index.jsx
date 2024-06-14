import "./styles.css";
import React, { useState } from "react";

export default function App() {
  [counter, setCounter] = useState(0);
  function handleCounter() {
    setCounter(counter + 1);
  }
  return (
    <div className="App">
      <span>Total Clicks : {counter}</span>
      <button onClick={handleCounter}>click!</button>
    </div>
  );
}
