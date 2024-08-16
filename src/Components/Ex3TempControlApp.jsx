import React, { useState } from "react";

function Ex3TempControlApp() {
  const [temp, setTemp] = useState(30);

  function incrementCounter() {
    setTemp(temp + 1);
  }

  function decrementCounter() {
    setTemp(temp - 1);
  }

  function getBgColor() {
    if (temp > 40) {
      return "#d92808";
    } else if (temp > 30) {
      return "#df6a10";
    } else if (temp > 20) {
      return "#50a7f9";
    } else if (temp > 10) {
      return "#70bf40";
    } else if (temp > 0) {
      return "#50a7f9";
    } else {
      return "#0432ff";
    }
  }

  return (
    <div className="ex3">
      <div className="counter-box">
        <div className="sub-container" >
          <div className="tempData"style={{ backgroundColor: getBgColor() }}>{temp}°C</div>
          <div className="counter-bars">
            <div className="Ex3btn" onClick={decrementCounter}>
              -
            </div>
            <div className="Ex3btn" onClick={incrementCounter}>
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ex3TempControlApp;
