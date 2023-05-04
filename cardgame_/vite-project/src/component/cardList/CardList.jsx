import React from "react";
import { DATA } from "./../../constant/CARD";
import CardItem from "../cardItem/CardItem";

import { doubleArray } from "./../../utils/doubleArray";
import { useState } from "react";
import { CardListWrapper, CardItmeList } from "./CardList.style";
const CardList = ({
  difficulty,
  onClick,
  correct = { correct },
  setCorrect = { setCorrect },
  // cardFlip,
  // setCardFlip,
}) => {
  const [wrongTwoCard, setWrongTwoCard] = useState([]);
  const [selectTwoCard, setSelectTwoCard] = useState([]);

  const handleWrongTwoCard = (arr) => {
    let temp = [...arr];
    setWrongTwoCard(temp);
  };

  const handleWrongSelectCard = (i) => {
    (prev) => {
      return [...prev, i];
    };
  };

  const [delay, setDelay] = useState(false);

  return (
    <CardListWrapper>
      {difficulty === "Easy" && (
        <CardItmeList>
          {doubleArray(DATA.slice(0, 5)).map((card, i) => {
            return (
              <CardItem
                key={i}
                src={card.src}
                id={card.id}
                selectTwoCard={selectTwoCard}
                correct={correct}
                setCorrect={setCorrect}
                wrongTwoCard={wrongTwoCard}
                handleWrongTwoCard={handleWrongTwoCard}
                delay={delay}
                setDelay={setDelay}
              ></CardItem>
            );
          })}
        </CardItmeList>
      )}
      {difficulty === "Normal" && (
        <CardItmeList>
          {doubleArray(DATA.slice(0, 7)).map((card, i) => {
            return (
              <CardItem
                key={i}
                src={card.src}
                id={card.id}
                selectTwoCard={selectTwoCard}
                correct={correct}
                setCorrect={setCorrect}
                wrongTwoCard={wrongTwoCard}
                handleWrongTwoCard={handleWrongTwoCard}
                delay={delay}
                setDelay={setDelay}
              ></CardItem>
            );
          })}
        </CardItmeList>
      )}
      {difficulty === "Hard" && (
        <CardItmeList>
          {doubleArray(DATA.slice(0, 9)).map((card, i) => {
            return (
              <CardItem
                key={i}
                src={card.src}
                id={card.id}
                selectTwoCard={selectTwoCard}
                correct={correct}
                setCorrect={setCorrect}
                wrongTwoCard={wrongTwoCard}
                handleWrongTwoCard={handleWrongTwoCard}
                delay={delay}
                setDelay={setDelay}
              ></CardItem>
            );
          })}
        </CardItmeList>
      )}
    </CardListWrapper>
  );
};

export default CardList;
