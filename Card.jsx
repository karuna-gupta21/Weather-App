import { UseWeather } from "../context/Weather";

const Card = () => {
  const Weather = UseWeather();
  return (
    <div>
      <img
        className=" Weather-img"
        src={Weather?.data?.current?.condition?.icon}
      ></img>
      <h2 className="Weather-temp">{Weather.data?.current?.temp_c}.C</h2>
      <h5 className="Weather-location">
        {Weather.data?.location?.name},{Weather.data?.location?.region} ,
        {Weather.data?.location?.country}
      </h5>
    </div>
  );
};
export default Card;
