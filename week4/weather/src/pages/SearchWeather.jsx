import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

import Select from "react-select";

const SearchWeather = () => {
  const navigate = useNavigate();

  const period = [
    { value: "day", label: "일간" },
    { value: "week", label: "주간" },
  ];

  const [selectedOption, setSelectedOption] = useState(period[0].value);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {}, [selectedOption]);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  const handleSearch = () => {
    navigate(`/${selectedOption.value}/${inputValue}`);
  };
  return (
    <SearchWeatherWrapper>
      <Header></Header>
      <SearchWrapper>
        <StyledSelect
          placeholder="기간"
          options={period}
          value={selectedOption}
          onChange={setSelectedOption}
          defaultValue={period[0].value}
        ></StyledSelect>
        <StyledInput
          placeholder="도시입력"
          value={inputValue}
          onChange={handleInput}
        ></StyledInput>
        <StyledBtn onClick={handleSearch}>검색</StyledBtn>
      </SearchWrapper>
      <Outlet></Outlet>
    </SearchWeatherWrapper>
  );
};

const SearchWeatherWrapper = styled.main`
  height: 100vh;
`;

const SearchWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 8rem;
`;

const StyledSelect = styled(Select)`
  width: 10rem;
`;

const StyledInput = styled.input`
  width: 15rem;
  height: 3.5rem;
  padding: 0.5rem;
`;

const StyledBtn = styled.button`
  width: 5rem;
  height: 3rem;
  background-color: ${(props) => props.theme.colors.mainLightGreen};
  border-radius: 1rem;
  font-family: inherit;
`;

export default SearchWeather;
