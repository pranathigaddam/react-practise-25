"use client";

import React, { useCallback, useState } from "react";
import ChildComponent from "./countInfo";

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
    alert("hello");
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
      <br></br>
      <button onClick={() => setCount(count + 1)}>Increment parent</button>
    </div>
  );
}

export default ParentComponent;
