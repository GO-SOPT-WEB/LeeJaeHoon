import React from "react";
import { CardData, DATA } from "../../constant/CARD";
import CardItem from "../cardItem/CardItem";

import { doubleArray } from "../../utils/doubleArray";
import { useState, useMemo } from "react";
import { CardListWrapper, CardItmeList } from "./CardList.style";

import { shuffleArray } from "../../utils/shuffleArray";

import { useRecoilValue } from "recoil";
import { difficultyState, resetState } from "../../atoms/atom";

const CardList = React.memo(() => {
  const [wrongTwoCard, setWrongTwoCard] = useState<number[]>([]);

  const [delay, setDelay] = useState(false);

  const difficulty = useRecoilValue(difficultyState);
  const reset = useRecoilValue(resetState);
  const handleWrongTwoCard = (arr: number[]) => {
    const temp = [...arr];
    setWrongTwoCard(temp);
  };

  const filterData: CardData[] = useMemo(() => {
    switch (difficulty) {
      case "Easy":
        return shuffleArray(doubleArray(shuffleArray(DATA).slice(0, 5)));
      case "Normal":
        return shuffleArray(doubleArray(shuffleArray(DATA).slice(0, 7)));
      case "Hard":
        return shuffleArray(doubleArray(shuffleArray(DATA).slice(0, 9)));
      default:
        return DATA;
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
              wrongTwoCard={wrongTwoCard}
              handleWrongTwoCard={handleWrongTwoCard}
              delay={delay}
              setDelay={setDelay}
            ></CardItem>
          );
        })}
      </CardItmeList>
    </CardListWrapper>
  );
});
export default CardList;
