"use client";
import { useState } from "react";
const Counter = () => {
  const [counter, setCounter] = useState(0);
  //   console.log(counter);
  return (
    <div>
      <h1 className="">{counter}</h1>
      <button
        onClick={() => setCounter(counter - 1)}
       className="btn btn-success"
      >
        Decres
      </button>
      <button
        onClick={() => setCounter(counter + 1)}
       className="btn btn-success"
      >
        Increse
      </button>
    </div>
  );
};

export default Counter;
