import React from "react";
import { MainWrapper } from "./Main.style";
import Header from "./../header/Header";
import CardList from "./../cardList/CardList";
import Nav from "./../nav/Nav";

import { useState } from "react";
const Main = ({ correct, countCorrect }) => {
  const [difficulty, setDifficulty] = useState("Easy");
  const [score, setScore] = useState(0);
  const [cardId, setCardId] = useState(-1);
  let selectTwoCard = [];

  const onClickDifficulty = (e) => {
    setDifficulty(e.target.value);
    console.log(e.target.value);
  };

  const onClickCardItem = (id) => {
    if (selectTwoCard.length < 2) {
      selectTwoCard.push(id);
      console.log(selectTwoCard);
      if (selectTwoCard[0] === selectTwoCard[1]) {
        countCorrect();
      }
    }
  };
  return (
    <MainWrapper>
      <Nav onClickDifficulty={onClickDifficulty}></Nav>
      <CardList difficulty={difficulty} onClick={onClickCardItem}></CardList>
    </MainWrapper>
  );
};

export default Main;
