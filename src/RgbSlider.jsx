import React, { useState } from "react";

const RgbSlider = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const handleChange = (color) => (e) => {
    const value = e.target.value;
    if (color === "red") setRed(value);
    if (color === "green") setGreen(value);
    if (color === "blue") setBlue(value);
  };

  const rgbColor = `rgb(${red}, ${green}, ${blue})`;

  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "150px",
          backgroundColor: rgbColor,
          marginBottom: "10px",
        }}
      ></div>

      <div>
        <label>Red: {red}</label>
        <input
          type="range"
          min="0"
          max="255"
          value={red}
          onChange={handleChange("red")}
        />
      </div>

      <div>
        <label>Green: {green}</label>
        <input
          type="range"
          min="0"
          max="255"
          value={green}
          onChange={handleChange("green")}
        />
      </div>

      <div>
        <label>Blue: {blue}</label>
        <input
          type="range"
          min="0"
          max="255"
          value={blue}
          onChange={handleChange("blue")}
        />
      </div>

      <div>
        <strong>RGB: {rgbColor}</strong>
      </div>
    </div>
  );
};

export default RgbSlider;
