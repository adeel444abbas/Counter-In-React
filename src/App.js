import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("grey");

  const handleIncreament = () => {
    setColor("grey");
    // setCount(count + 1);
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    setColor("grey");
    // setCount(count - 1);
    // setCount(count - 1);
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
  };
  const handleReset = () => {
    setCount(0);
    if (count !== 0) {
      setColor("green");
    }
  };
  return (
    <>
      <Counter
        color={color}
        count={count}
        handleIncreament={handleIncreament}
        handleDecrement={handleDecrement}
        handleReset={handleReset}
      />
    </>
  );
}

export default App;
