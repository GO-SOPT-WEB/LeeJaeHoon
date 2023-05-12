import React from "react";
import { weekSelector } from "../recoil/selector";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { WEATER_TYPE } from "../constants/weather.js";
import DayCard from "../components/DayCard";
const WeekCardWeather = () => {
  const { area } = useParams();
  const WeatherList = useRecoilValue(weekSelector(area));
  console.log(WeatherList);
  function getWeatherImgUrl(weatherDescription) {
    const weatherType = WEATER_TYPE.find(
      (item) => item.description === weatherDescription
    );
    return weatherType ? weatherType.imgURL : null;
  }
  return (
    <WeekCardWeatherWrapper>
      {WeatherList.list.slice(0, 5).map((weather, index) => (
        <DayCard
          key={index}
          area={area}
          main={weather.main}
          clouds={weather.clouds.all}
          imgSrc={getWeatherImgUrl(weather.weather[0].description)}
        />
      ))}
    </WeekCardWeatherWrapper>
  );
};

const WeekCardWeatherWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

export default WeekCardWeather;
