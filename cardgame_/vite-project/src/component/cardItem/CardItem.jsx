import { useState, useEffect } from "react";
import {
  CardWrapper,
  CardImg,
  CardInner,
  CardFront,
  CardBack,
  CardBackImg,
} from "./CardItem.style";

const Card = ({
  src,
  id,
  selectTwoCard,
  correct,
  setCorrect,
  wrongTwoCard,
  handleWrongTwoCard,
  delay,
  setDelay,
}) => {
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    if (wrongTwoCard.length === 2) {
      wrongTwoCard.forEach((cardId) => {
        if (cardId === id) {
          console.log("출력해줘!");
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
  const handleClick = () => {
    setFlip(true);
    if (selectTwoCard.length < 2) {
      selectTwoCard.push(id);
      console.log(selectTwoCard);
      if (selectTwoCard.length === 2) {
        setDelay(true);
        if (selectTwoCard[0] === selectTwoCard[1]) {
          setCorrect(correct + 1);
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
    <CardWrapper onClick={delay ? null : handleClick}>
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
