const Card = ({ title, src }) => {
  return (
    <div>
      <img src={src} alt={title} />
    </div>
  );
};

export default Card;
