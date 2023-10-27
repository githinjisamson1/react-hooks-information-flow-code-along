import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();

  // states
  const [color, setColor] = useState(randomColor);
  const [childColor, setChildColor] = useState("#fff");

  // method to be passed as prop
  const handleChangeColor = (newChildColor) => {
    const newRandomColor = getRandomColor();
    setColor(newRandomColor);
    setChildColor(newChildColor);
  };

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child handleChangeColor={handleChangeColor} childColor={childColor} />
      <Child andleChangeColor={handleChangeColor} childColor={childColor} />
    </div>
  );
}

export default Parent;
