import { useEffect, useState } from "react";
import styled from "styled-components";

const FooterContainer = ({ className }) => {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&lang=ru&appid=b9f599297f2a9d8e762e1ac861700be6"
    )
      .then((res) => res.json())
      .then(({ name, main, weather }) => {
        setCity(name);
        setTemperature(Math.round(main.temp));
        setWeather(weather[0].description);
      });
  }, []);
  return (
    <div className={className}>
      <div>
        <div>Блог веб-разработчика</div>
        <div>webdeveloper@email.ru</div>
      </div>
      <div>
        <div>
          {city}, {new Date().toLocaleString("ru", { day: "numeric", month: "long" })}
        </div>
        <div>
          {temperature} градусов, {weather}
        </div>
      </div>
    </div>
  );
};

export const Footer = styled(FooterContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  width: 1000px;
  height: 105px;
  padding: 20px 40px;
  background-color: #fff;
  box-shadow: 0px 2px 17px #000;
`;
