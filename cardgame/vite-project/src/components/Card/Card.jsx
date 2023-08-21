import { CardWrapper } from "./Card.style";

const Card = ({ title, src }) => {
  return (
    <CardWrapper>
      <img src={src} alt={title} />
    </CardWrapper>
  );
};

export default Card;
