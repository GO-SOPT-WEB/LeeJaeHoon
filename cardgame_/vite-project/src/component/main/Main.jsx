import React from "react";
import { MainWrapper } from "./Main.style";
import Header from "./../header/Header";
import CardList from "./../cardList/CardList";
import Nav from "./../nav/Nav";

import { useState } from "react";
const Main = ({ correct, setCorrect, setAll, reset }) => {
  const [difficulty, setDifficulty] = useState("Easy");

  const onClickDifficulty = (e) => {
    setDifficulty(e.target.value);
    console.log(e.target.value);
    switch (e.target.value) {
      case "Easy":
        setAll(5);
        setCorrect(0);
        break;
      case "Normal":
        setAll(7);
        setCorrect(0);
        break;
      case "Hard":
        setAll(9);
        setCorrect(0);
        break;
      default:
        break;
    }
  };

  return (
    <MainWrapper>
      <Nav onClickDifficulty={onClickDifficulty}></Nav>
      <CardList
        difficulty={difficulty}
        correct={correct}
        setCorrect={setCorrect}
        reset={reset}
      ></CardList>
    </MainWrapper>
  );
};

export default Main;
