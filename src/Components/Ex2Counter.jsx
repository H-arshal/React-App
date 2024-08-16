import React, { useState } from "react";
function Ex2Counter() {
  var [data, setData] = useState(0);
  function incrementCounter() {
    setData(data+1);
  }
  function decrementCounter() {
    setData(data-1);
    
  }
  return (
    <div>
      <div className="counter-box">
        <div className="sub-box">
          <button className="Ex2btn" onClick={decrementCounter}>
            -
          </button>
          <div>{data}</div>
          <button className="Ex2btn" onClick={incrementCounter}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
export default Ex2Counter;
