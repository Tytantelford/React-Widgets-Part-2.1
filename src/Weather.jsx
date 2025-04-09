import React, { useState, useEffect } from "react";

const Weather = () => {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=50.9793&longitude=11.0299&current_weather=true&temperature_unit=fahrenheit`
      );
      const data = await response.json();
      setTemperature(data.current_weather.temperature);
    };

    fetchWeather();
  }, []);

  return (
    <div>
      <h2>Wetter in der schönen Stadt Erfurt Deutschland</h2>
      <p>{temperature}°F</p>
    </div>
  );
};

export default Weather;
