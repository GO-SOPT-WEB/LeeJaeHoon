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
  let selectTwoCard = [];
  console.log(selectTwoCard);
  const handleWrongTwoCard = (arr) => {
    let temp = [...arr];
    setWrongTwoCard(temp);
  };

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
                onClick={onClick}
                // cardFlip={cardFlip}
                // setCardFlip={setCardFlip}
                selectTwoCard={selectTwoCard}
                correct={correct}
                setCorrect={setCorrect}
                wrongTwoCard={wrongTwoCard}
                handleWrongTwoCard={handleWrongTwoCard}
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
                onClick={onClick}
                // cardFlip={cardFlip}
                // setCardFlip={setCardFlip}
                selectTwoCard={selectTwoCard}
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
                onClick={onClick}
                // cardFlip={cardFlip}
                // setCardFlip={setCardFlip}
                selectTwoCard={selectTwoCard}
              ></CardItem>
            );
          })}
        </CardItmeList>
      )}
    </CardListWrapper>
  );
};

export default CardList;
