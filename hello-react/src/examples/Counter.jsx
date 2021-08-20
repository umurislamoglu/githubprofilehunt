
import React, { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);


    var addOne = () => {
      setCount(count+ 1)
    }

    var minusOne = () => {
      setCount(count- 1)
    }


    var resetCount = () => {
      setCount(0)
    }

  return (
    <div className="counter">
      <h1>Number: {count}</h1>
      <button
        id="btnPlusOne"
        className="btnRed"
        onClick={addOne}
      >
        +1
      </button>
      <button
        id="btnMinusOne"
        className="btnBlue"
        onClick={minusOne}
      >
        -1
      </button>
      <button
        id="reset"
        className="btnreset"
        onClick={resetCount}
      >
        Reset
      </button>
    </div>
  );
}
