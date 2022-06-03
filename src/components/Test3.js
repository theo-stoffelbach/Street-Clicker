import React, { useEffect, useState } from "react";

function Weather() {
  const [weather, setWeather] = useState("");

  useEffect(() => console.log(weather), [weather]);

  const changeValue = (event) => setWeather(event.target.value);

  return <input value={weather} onChange={changeValue} />;
}

export default Weather;
