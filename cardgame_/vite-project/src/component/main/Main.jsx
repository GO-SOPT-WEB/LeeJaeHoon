import React from "react";
import { MainWrapper } from "./Main.style";
import Header from "./../header/Header";
import CardList from "./../cardList/CardList";
import Nav from "./../nav/Nav";

import { useState } from "react";
const Main = ({ correct, setCorrect, setAll }) => {
  const [difficulty, setDifficulty] = useState("Easy");
  const [cardFlip, setCardFlip] = useState(1);

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
  const onClickCardItem = (id, success) => {
    // if (selectTwoCard.length < 2) {
    //   selectTwoCard.push(id);
    //   console.log(selectTwoCard + " AA " + selectTwoCard.length);
    //   if (selectTwoCard.length === 2) {
    //     if (selectTwoCard[0] === selectTwoCard[1]) {
    //       setCorrect(correct + 1);
    //       setCardFlip(1); //다시 뒤집을 필요 없는
    //       success = true;
    //     }
    //     if (selectTwoCard[0] !== selectTwoCard[1]) {
    //       setCardFlip(-1); //원상복귀를 해줘라
    //     }
    //     selectTwoCard.splice(0, selectTwoCard.length);
    //   }
    // }
  };

  return (
    <MainWrapper>
      <Nav onClickDifficulty={onClickDifficulty}></Nav>
      <CardList
        difficulty={difficulty}
        onClick={onClickCardItem}
        correct={correct}
        setCorrect={setCorrect}
        // cardFlip={cardFlip}
        // setCardFlip={setCardFlip}
      ></CardList>
    </MainWrapper>
  );
};

export default Main;
