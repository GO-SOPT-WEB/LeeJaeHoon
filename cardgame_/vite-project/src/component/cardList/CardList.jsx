import React from "react";
import { DATA } from "./../../constant/CARD";
import CardItem from "../cardItem/CardItem";

import { doubleArray } from "./../../utils/doubleArray";
import { useState, useMemo } from "react";
import { CardListWrapper, CardItmeList } from "./CardList.style";

import { shuffleArray } from "./../../utils/shuffleArray";
const CardList = ({
  difficulty,
  correct = { correct },
  setCorrect = { setCorrect },
}) => {
  const [wrongTwoCard, setWrongTwoCard] = useState([]);
  const [selectTwoCard, setSelectTwoCard] = useState([]);

  const handleWrongTwoCard = (arr) => {
    let temp = [...arr];
    setWrongTwoCard(temp);
  };

  // const handleWrongSelectCard = (i) => {
  //   (prev) => {
  //     return [...prev, i];
  //   };
  // };

  const [delay, setDelay] = useState(false);
  let filterData = useMemo(
    () => {
      switch (difficulty) {
        case "Easy":
          return doubleArray(shuffleArray(DATA).slice(0, 5));
          break;
        case "Normal":
          return doubleArray(shuffleArray(DATA).slice(0, 7));
          break;
        case "Hard":
          return doubleArray(shuffleArray(DATA).slice(0, 9));
      }
    },
    [difficulty]
    // shuffleArray(DATA)
  );

  console.log(filterData);
  return (
    <CardListWrapper>
      <CardItmeList>
        {filterData.map((card, i) => {
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
      {/* )}
      {difficulty === "Normal" && (
        <CardItmeList>
          {filterData.map((card, i) => {
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
          {filterData.map((card, i) => {
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
      )} */}
    </CardListWrapper>
  );
};
export default CardList;
