import { CardWrapper, CardImg } from "./cardItem.style";

const Card = ({ title, src }) => {
  return (
    <CardWrapper>
      <CardImg src={src} alt={title} />
    </CardWrapper>
  );
};

export default Card;
