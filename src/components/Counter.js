import React, { useState } from "react";

//const { useState } = require("react");

function Counter() {
  const [count, setCount] = useState(1);

  function increment() {
    setCount(count + 1);
  }
  return <button onClick={increment}>I was clicked {count} times</button>
}

export default Counter;


