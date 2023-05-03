import React from "react";
import { MainWrapper } from "./Main.style";
import Header from "./../header/Header";
import CardList from "./../cardList/CardList";
import Nav from "./../nav/Nav";

import { useState } from "react";
const Main = ({ correct, setCorrect, setAll }) => {
  const [difficulty, setDifficulty] = useState("Easy");
  const [score, setScore] = useState(0);
  const [cardFlip, setCardFlip] = useState(-1);

  let selectTwoCard = [];

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
  const onClickCardItem = (id) => {
    if (selectTwoCard.length < 2) {
      selectTwoCard.push(id);
      console.log(selectTwoCard + " AA " + selectTwoCard.length);
      if (selectTwoCard[0] === selectTwoCard[1]) {
        setCorrect(correct + 1);
        selectTwoCard.splice(0, selectTwoCard.length);
      } else if (selectTwoCard.length === 2) {
        selectTwoCard.splice(0, selectTwoCard.length);
      }
    }
  };

  return (
    <MainWrapper>
      <Nav onClickDifficulty={onClickDifficulty}></Nav>
      <CardList
        difficulty={difficulty}
        onClick={onClickCardItem}
        cardFilp={cardFlip}
      ></CardList>
    </MainWrapper>
  );
};

export default Main;
