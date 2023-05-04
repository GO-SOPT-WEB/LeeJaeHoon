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
  onClick,
  selectTwoCard,
  setSelectTwoCard,
  correct,
  setCorrect,
  wrongTwoCard,
  handleWrongTwoCard,
}) => {
  const [flip, setFlip] = useState(false);
  const [clickDisabled, setClickDisabled] = useState(true);
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

  // useEffect(() => {
  //   if (selectTwoCard.length === 2) {
  //     console.log("이게 찍히나?");
  //     setClickDisabled(true);
  //     setTimeout(() => {
  //       setClickDisabled(false);
  //     }, 1000);
  //   }
  // }, [selectTwoCard]);

  const handleClick = (id) => {
    // if (clickDisabled) {
    //   setTimeout(() => {
    //     setClickDisabled(false);
    //   }, 1000);
    // }
    setFlip(true);
    if (selectTwoCard.length < 2) {
      selectTwoCard.push(id);

      if (selectTwoCard.length === 2) {
        if (selectTwoCard[0] === selectTwoCard[1]) {
          setCorrect(correct + 1);
        }
        if (selectTwoCard[0] !== selectTwoCard[1]) {
          handleWrongTwoCard(selectTwoCard);
        }
        selectTwoCard.splice(0, selectTwoCard.length);
      }
    }

    // onClick(id, success);
  };

  return (
    <CardWrapper onClick={() => handleClick(id)}>
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
