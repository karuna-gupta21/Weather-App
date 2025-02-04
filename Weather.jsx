import { createContext, useState, useContext } from "react";
import { getWeatherForCity, getWeatherForLocation } from "../Api";
export const WeatherContext = createContext(null);

export const UseWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherContextProvider = (props) => {
  const [data, setData] = useState(null);
  const [SearchCity, setSearchCity] = useState(null);

  const fetchData = async () => {
    const response = await getWeatherForCity(SearchCity);
    setData(response);
  };

  const fetchCurrentUserLocationData = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeatherForLocation(
        position.coords.latitude,
        position.coords.longitude
      ).then((data) => setData(data));
    });
  };

  return (
    <WeatherContext.Provider
      value={{
        SearchCity,
        data,
        setSearchCity,
        fetchData,
        fetchCurrentUserLocationData,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
