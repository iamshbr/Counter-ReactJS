import { useState } from "react";
import "./App.css";

function App() {
  const count = sessionStorage.getItem("counter") || 0;

  const [counter, setCounter] = useState(parseInt(count));

  const incrementCount = () => {
    if (counter < 300) setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  const pauseCounter = () => {
    sessionStorage.setItem("counter", counter);
  };

  const restartCounter = () => {
    sessionStorage.removeItem("counter");
    setCounter(0);
  };

  return (
    <>
      <h1>Counter</h1>
      <div>{counter}</div>
      <br />

      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <button onClick={pauseCounter}>Pause</button>
      <button onClick={restartCounter}>Restart</button>
    </>
  );
}

export default App;
