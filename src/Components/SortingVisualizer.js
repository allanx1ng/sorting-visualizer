import "../css/SortingVisualizer.css";
import ArrayBar from "./ArrayBar";
import { useState, useEffect } from "react";

const SortingVisualizer = () => {
  useEffect(() => {
    initiateArray();
  }, []);

  const [array, setArray] = useState([]);

  const initiateArray = () => {
    let temp = [];
    for (let i = 0; i < 100; i++) {
      temp.push(generateRandomNumber(1, 100));
    }
    setArray(temp);
    console.log(array);
  };

  //   const [count, setCount] = useState(0);

  return (
    <div className="functionbar">
      hello world
      <button onClick={initiateArray}>button</button>
      {array[0]}
      <div className="histogram">
        {array.map((i) => (
          <div
            className="histbar"
            style={{
              height: `${4*i}px`
            }}
          ></div>
        ))}
      </div>
    </div>

    // <div>
    //   <p>You clicked {count} times</p>
    //   <button onClick={() => setCount(count + 1)}>Click me</button>
    // </div>
  );
};

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export default SortingVisualizer;
