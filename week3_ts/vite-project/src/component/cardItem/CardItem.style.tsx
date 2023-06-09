import styled from "styled-components";

export const CardWrapper = styled.main`
  display: inline-block;
  width: 200px;
  height: 230px;

  perspective: 550rem;
`;

export const CardInner = styled.section<{ flip: boolean }>`
  position: relative;
  width: 95%;
  height: 95%;
  text-align: center;

  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform: ${(props) => (props.flip ? "rotateY(180deg)" : "")};

  cursor: pointer;
`;

export const CardFrontBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  backface-visibility: hidden;
  border-radius: 20px;
`;

export const CardFront = styled(CardFrontBack)`
  background-repeat: no-repeat;

  transform: rotateY(180deg);
`;

export const CardBack = styled(CardFrontBack)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  padding: 1.5rem;
`;

export const CardBackImg = styled.img`
  width: 100%;
  height: 100%;
  background-image: url("src/assets/cardBackImg4.png");

  object-fit: contain;
  background-size: cover;
  border-radius: 20px;
`;
