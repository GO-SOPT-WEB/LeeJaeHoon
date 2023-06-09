import { useState, useEffect, MouseEventHandler } from "react";
import {
  CardWrapper,
  CardImg,
  CardInner,
  CardFront,
  CardBack,
  CardBackImg,
} from "./CardItem.style";

import {
  scoreState,
  difficultyState,
  resetState,
  selectTwoCardState,
} from "../../atoms/atom";
import { useRecoilState, useRecoilValue } from "recoil";
import React from "react";
import { clearScreenDown } from "readline";

interface CardPropType {
  key: number;
  src: string;
  id: number;
  success: boolean;
  wrongTwoCard: number[];
  handleWrongTwoCard: (value: number[]) => void;
  delay: boolean;
  setDelay: React.Dispatch<React.SetStateAction<boolean>>;
}

const Card = ({
  src,
  id,
  success,
  wrongTwoCard,
  handleWrongTwoCard,
  delay,
  setDelay,
}: CardPropType) => {
  const [flip, setFlip] = useState<boolean>(false);
  const [score, setScore] = useRecoilState(scoreState);
  const [selectTwoCard, setSelectTwoCard] = useRecoilState(selectTwoCardState);
  const difficulty = useRecoilValue(difficultyState);
  const reset = useRecoilValue(resetState);

  useEffect(() => {
    if (wrongTwoCard.length === 2) {
      wrongTwoCard.forEach((cardId) => {
        if (cardId === id) {
          setTimeout(() => {
            setFlip(false);
          }, 1000);
          handleWrongTwoCard([]);
        }
      });
    }
  }, [wrongTwoCard]);

  useEffect(() => {
    setDelay(false);
  }, [selectTwoCard]);

  useEffect(() => {
    setFlip(false);
  }, [reset, difficulty]);

  const handleClick = () => {
    setFlip(true);

    if (selectTwoCard.length < 3) {
      const updatedSelectTwoCard = [...selectTwoCard, id];
      setSelectTwoCard(updatedSelectTwoCard);
      if (updatedSelectTwoCard.length === 2) {
        setDelay(true);
        if (updatedSelectTwoCard[0] === updatedSelectTwoCard[1]) {
          setScore(score + 1);
        }

        if (updatedSelectTwoCard[0] !== updatedSelectTwoCard[1]) {
          handleWrongTwoCard(updatedSelectTwoCard);
          console.log(wrongTwoCard);
        }
        setSelectTwoCard([]);
        setTimeout(() => {
          setDelay(false);
        }, 1000);
      }
    }
  };

  return (
    <CardWrapper
      onClick={
        delay || success
          ? undefined
          : (handleClick as MouseEventHandler<HTMLElement>)
      }
    >
      <CardInner flip={flip}>
        <CardBack>
          <CardBackImg></CardBackImg>
        </CardBack>
        <CardFront>
          <CardImg src={src}></CardImg>
        </CardFront>
      </CardInner>
    </CardWrapper>
  );
};

export default Card;
