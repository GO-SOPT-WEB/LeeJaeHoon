const Card = ({ title, src }) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={src} alt={title} />
    </div>
  );
};

export default Card;
