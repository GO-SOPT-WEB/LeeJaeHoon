import React from "react";
import { MainWrapper } from "./Main.style";
import Header from "./../header/Header";
import CardList from "./../cardList/CardList";
import Nav from "./../nav/Nav";

import { useState } from "react";
const Main = () => {
  const [difficulty, setDifficulty] = useState("Easy");
  const onClickDifficulty = (e) => {
    setDifficulty(e.target.value);
    console.log(e.target.value);
  };
  return (
    <MainWrapper>
      <Nav onClickDifficulty={onClickDifficulty}></Nav>
      <CardList difficulty={difficulty}></CardList>
    </MainWrapper>
  );
};

export default Main;
