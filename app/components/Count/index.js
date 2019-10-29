/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

import './index.css'
export default function Count() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  var increment = () => {
    setCount(count + 1);
  }
  var decrement = () => {
    if(count > 0){
      setCount(count - 1);
    }
  }
  return (
    <div>
      <p> Example: v-onclick event  <br/> # {count}</p>
      <button type="button" class="btn btn-info buttonBlue" onClick={increment}>+</button>
      <button type="button" class="btn btn-info buttonBlue" onClick={decrement}>-</button>
    </div>
  );
}
