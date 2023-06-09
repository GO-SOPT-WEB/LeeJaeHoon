import { useState, useEffect, MouseEventHandler } from "react";
import {
  CardWrapper,
  CardImg,
  CardInner,
  CardFront,
  CardBack,
  CardBackImg,
} from "./CardItem.style";

import { scoreState, difficultyState, resetState } from "../../atoms/atom";
import { useRecoilState, useRecoilValue } from "recoil";
import React from "react";

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
  const difficulty = useRecoilValue(difficultyState);
  const reset = useRecoilValue(resetState);
  const selectTwoCard: number[] = [];

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
    if (selectTwoCard.length < 2) {
      selectTwoCard.push(id);

      if (selectTwoCard.length === 2) {
        setDelay(true);
        if (selectTwoCard[0] === selectTwoCard[1]) {
          setScore(score + 1);
        }

        if (selectTwoCard[0] !== selectTwoCard[1]) {
          handleWrongTwoCard(selectTwoCard);
        }

        selectTwoCard.splice(0, selectTwoCard.length);
        setTimeout(() => {
          setDelay(false);
        }, 1000);
      }
    }

    // onClick(id, success);
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
