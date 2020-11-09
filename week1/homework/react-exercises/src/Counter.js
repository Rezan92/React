import React, { useState } from "react";
import "./assets/style/Counter.css"

const Count = ({ count }) => {
  return <h1 className="counter" style={count > 10 ? {"color":"#bb0303"} : {"color":"green"}}>{count}</h1>;
};

const Button = ({ setCount, count }) => {
  return <button onClick={() => setCount(count + 1)}>Add 1!</button>;
};

const Counter = () => {
  const [count, setCount] = useState(0);
  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";
  return (
    <div className="counter-container">
      <Count count={count} />
      <p style={count > 10 ? {"color":"#bb0303"} : {"color":"green"}}>{feedback}</p>
      <Button setCount={setCount} count={count} />
    </div>
  );
};

export default Counter;
