import React, { useState } from "react";

const FontSizer = () => {
  const [fontSize, setFontSize] = useState(20);

  const increaseFont = () => {
    if (fontSize < 100) setFontSize(fontSize + 5);
  };

  const decreaseFont = () => {
    if (fontSize > 0) setFontSize(fontSize - 5);
  };

  return (
    <div>
      <p style={{ fontSize: `${fontSize}px` }}>Click the buttons below</p>
      <button onClick={increaseFont}>Bigger :)</button>
      <button onClick={decreaseFont}>Smaller :(</button>
    </div>
  );
};

export default FontSizer;
