import React from "react";
import { useState } from "react";

export default function ServerComponent() {
  console.log("Server");

  // const [count, setCount] = useState(0);

  return (
    <div>
      サーバー
      {/* <button onClick={() => setCount(count + 1)}>Count: {count}</button> */}
    </div>
  );
}
