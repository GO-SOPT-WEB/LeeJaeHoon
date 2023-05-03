import { useState } from "react";
import {
  CardWrapper,
  CardImg,
  CardInner,
  CardFront,
  CardBack,
  CardBackImg,
} from "./CardItem.style";

const Card = ({ src }) => {
  const [flip, setFlip] = useState(false);

  const handleClick = () => {
    setFlip((current) => !current);
  };

  return (
    <CardWrapper onClick={handleClick}>
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
