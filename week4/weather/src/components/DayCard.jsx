import React from "react";
import styled from "styled-components";
const DayCard = ({ area, main, clouds, imgSrc }) => {
  return (
    <DayCardWrapper>
      <WeatherCard>
        <MainText>{area}</MainText>
        {imgSrc && <StyledImg src={imgSrc} alt="날씨 이미지"></StyledImg>}

        <SubText>온도 :{main.temp}</SubText>
        <SubText>체감온도: {main.feels_like}</SubText>
        <SubText>
          최저 / 최고: {main.temp_min} / {main.temp_max}
        </SubText>
        <SubText>구름: {clouds}%</SubText>
      </WeatherCard>
    </DayCardWrapper>
  );
};
const DayCardWrapper = styled.div``;
const WeatherCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 27rem;
  height: 47rem;
  background-color: ${(props) => props.theme.colors.mainLightBlue};
  border-radius: 10px;
`;

const StyledImg = styled.img`
  width: 20rem;
  height: 20rem;
`;

const MainText = styled.h1`
  font-size: ${(props) => props.theme.fontSize.xxl};
  color: white;
`;

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontSize.md};
  color: white;
`;

export default DayCard;
