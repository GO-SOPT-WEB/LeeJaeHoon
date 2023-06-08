import { useState, useEffect } from "react";
import {
  CardWrapper,
  CardImg,
  CardInner,
  CardFront,
  CardBack,
  CardBackImg,
} from "./CardItem.style";

import { scoreState, difficultyState } from "../../atoms/atom";
import { useRecoilState, useRecoilValue } from "recoil";

const Card = ({
  src,
  id,
  success,
  selectTwoCard,
  wrongTwoCard,
  handleWrongTwoCard,
  delay,
  setDelay,
  reset,
}) => {
  const [flip, setFlip] = useState(false);
  const [score, setScore] = useRecoilState(scoreState);
  const difficulty = useRecoilValue(difficultyState);
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
    return () => {};
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
    <CardWrapper onClick={delay || success ? null : handleClick}>
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
