import React from "react";
import { useParams } from "react-router-dom";
import { daySelector } from "../recoil/selector";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { WEATER_TYPE } from "../constants/weather.js";
import DayCard from "../components/DayCard";
const CardDayWeather = () => {
  const { area } = useParams();

  const { main, clouds, weather } = useRecoilValue(daySelector(area));
  const { description } = weather[0];

  function getWeatherImgUrl(weatherDescription) {
    const weatherType = WEATER_TYPE.find(
      (item) => item.description === weatherDescription
    );
    return weatherType ? weatherType.imgURL : null;
  }
  return (
    <CardDayWeatherWrapper>
      <DayCard
        area={area}
        main={main}
        cloud={clouds.all}
        imgSrc={getWeatherImgUrl(description)}
      ></DayCard>
    </CardDayWeatherWrapper>
  );
};

const CardDayWeatherWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default CardDayWeather;
