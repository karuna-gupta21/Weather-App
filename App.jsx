import Input from "./components/input";
import Button from "./components/button";
import Card from "./components/card";
import "./App.css";
import { UseWeather } from "./context/Weather";
import { useEffect } from "react";
function App() {
  const Weather = UseWeather();
  console.log(Weather);

  useEffect(() => {
    Weather.fetchCurrentUserLocationData();
  }, []);

  return (
    <>
      <h1>Weather App</h1>
      <Input />
      <Button onClick={Weather.fetchData} value="Search" />
      <Card />
    </>
  );
}

export default App;
