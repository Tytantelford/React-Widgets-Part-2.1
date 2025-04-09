import React, { useState } from "react";

const ColorChanger = () => {
  const [color, setColor] = useState("#252525");
  const [input, setInput] = useState("");

  return (
    <div>
      <h1 style={{ color: color }}>{color}</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter color"
      />
      <button
        onClick={() => {
          setColor(input);
          setInput("");
        }}
      >
        Enter
      </button>
    </div>
  );
};

export default ColorChanger;
