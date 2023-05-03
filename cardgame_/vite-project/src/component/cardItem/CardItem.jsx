import { useState } from "react";
import {
  CardWrapper,
  CardImg,
  CardInner,
  CardFront,
  CardBack,
  CardBackImg,
} from "./CardItem.style";

const Card = ({ src, id, onClick }) => {
  const [flip, setFlip] = useState(false);

  const handleClick = () => {
    setFlip(true);
  };

  return (
    <CardWrapper onClick={handleClick}>
      <CardInner flip={flip}>
        <CardBack>
          <CardBackImg
            onClick={() => {
              onClick(id);
            }}
          ></CardBackImg>
        </CardBack>
        <CardFront>
          <CardImg src={src}></CardImg>
        </CardFront>
      </CardInner>
    </CardWrapper>
  );
};

export default Card;
