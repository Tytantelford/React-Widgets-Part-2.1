import React, { useState } from "react";

const TextAlignment = () => {
  const [alignment, setAlignment] = useState("left");

  const handleAlignment = (align) => {
    setAlignment(align);
  };

  return (
    <div>
      <p style={{ textAlign: alignment }}>Click the buttons below</p>
      <button onClick={() => handleAlignment("left")}>Left</button>
      <button onClick={() => handleAlignment("center")}>Center</button>
      <button onClick={() => handleAlignment("right")}>Right</button>
    </div>
  );
};

export default TextAlignment;
