import React from "react";
import { MainWrapper } from "./Main.style";
import CardList from "./../cardList/CardList";
import Nav from "./../nav/Nav.tsx";
import { useRecoilState } from "recoil";
import { difficultyState } from "../../atoms/difficulty";

import { useState } from "react";
const Main = ({ correct, setCorrect, setAll, reset }) => {
  const [difficulty, setDifficulty] = useRecoilState(difficultyState);

  const onClickDifficulty = (e) => {
    setDifficulty(e.target.value);

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
        correct={correct}
        setCorrect={setCorrect}
        reset={reset}
      ></CardList>
    </MainWrapper>
  );
};

export default Main;
