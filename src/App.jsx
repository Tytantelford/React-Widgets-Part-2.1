import React from "react";
import FontSizer from "./FontSizer";
import TextAlignment from "./TextAlignment";
import Clock from "./Clock";
import ColorChanger from "./ColorChanger";
import RgbSlider from "./RgbSlider";
import Weather from "./Weather";

const App = () => {
  return (
    <div>
      <FontSizer />
      <TextAlignment />
      <Clock />
      <ColorChanger />
      <RgbSlider />
      <Weather />
    </div>
  );
};

export default App;
