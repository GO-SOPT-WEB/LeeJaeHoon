import React from "react";
import { DATA } from "../../constant/CARD";
import CardItem from "../cardItem/CardItem";

import { doubleArray } from "../../utils/doubleArray";
import { useState, useMemo } from "react";
import { CardListWrapper, CardItmeList } from "./CardList.style";

import { shuffleArray } from "../../utils/shuffleArray";

import { useRecoilState, useRecoilValue } from "recoil";
import { difficultyState } from "../../atoms/difficulty";

const CardList = React.memo(({ correct, setCorrect, reset }) => {
  const [wrongTwoCard, setWrongTwoCard] = useState([]);
  const [selectTwoCard, setSelectTwoCard] = useState([]);
  const [delay, setDelay] = useState(false);

  const difficulty = useRecoilValue(difficultyState);

  const handleWrongTwoCard = (arr) => {
    let temp = [...arr];
    setWrongTwoCard(temp);
  };

  let filterData = useMemo(() => {
    switch (difficulty) {
      case "Easy":
        return shuffleArray(doubleArray(shuffleArray(DATA).slice(0, 5)));
      case "Normal":
        return shuffleArray(doubleArray(shuffleArray(DATA).slice(0, 7)));
      case "Hard":
        return shuffleArray(doubleArray(shuffleArray(DATA).slice(0, 9)));
    }
  }, [difficulty, reset]);

  return (
    <CardListWrapper>
      <CardItmeList>
        {filterData.map((card, i) => {
          return (
            <CardItem
              key={i}
              src={card.src}
              id={card.id}
              success={card.success}
              selectTwoCard={selectTwoCard}
              correct={correct}
              setCorrect={setCorrect}
              wrongTwoCard={wrongTwoCard}
              handleWrongTwoCard={handleWrongTwoCard}
              delay={delay}
              setDelay={setDelay}
              difficulty={difficulty}
              reset={reset}
            ></CardItem>
          );
        })}
      </CardItmeList>
    </CardListWrapper>
  );
});
export default CardList;
