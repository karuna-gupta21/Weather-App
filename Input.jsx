import { UseWeather } from "../context/Weather";

const Input = () => {
  const Weather = UseWeather();
  return (
    <input
      className="Input-field"
      placeholder="Search here.."
      value={Weather.SearchCity}
      onChange={(e) => Weather.setSearchCity(e.target.value)}
    />
  );
};
export default Input;
