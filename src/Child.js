import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ handleChangeColor, childColor }) {

  const handleBtnClick = () => {
    const newRandomColor = getRandomColor();
    handleChangeColor(newRandomColor);
  };
  
  return (
    <div
      onClick={handleBtnClick}
      className="child"
      style={{ backgroundColor: childColor }}
    />
  );
}

export default Child;
