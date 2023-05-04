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
  correct,
  setCorrect,
  wrongTwoCard,
  handleWrongTwoCard,
}) => {
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    return () => {};
  }, []);

  const handleIncorrect = (id) => {
    console.log(wrongTwoCard);
    if (wrongTwoCard.length === 2) {
      wrongTwoCard.forEach((cardId) => {
        if (cardId === id) {
          console.log("출력해줘!");
          setFlip(false);
          handleWrongTwoCard([]);
        }
      });
    }
  };

  const handleClick = (id, success) => {
    console.log("handleClick실행!");
    setFlip(true);
    if (selectTwoCard.length < 2) {
      selectTwoCard.push(id);
      console.log(selectTwoCard + " @@ " + selectTwoCard.length);
      if (selectTwoCard.length === 2) {
        if (selectTwoCard[0] === selectTwoCard[1]) {
          setCorrect(correct + 1);
          // setCardFlip(1); //다시 뒤집을 필요 없는
          console.log("정답");
        }
        if (selectTwoCard[0] !== selectTwoCard[1]) {
          // setCardFlip(-1); //원상복귀를 해줘라
          handleWrongTwoCard(selectTwoCard);
          console.log("오답", wrongTwoCard);
          handleIncorrect();
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
