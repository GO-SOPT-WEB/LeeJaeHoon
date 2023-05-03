import styled from "styled-components";

export const CardWrapper = styled.main`
  display: inline-block;
  width: 200px;
  height: 250px;

  perspective: 300px;
`;

export const CardInner = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
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
  background-image: url("${(props) => props && props.src}");
  background-repeat: no-repeat;

  transform: rotateY(180deg);
`;

export const CardBack = styled(CardFrontBack)`
  /* background-color: ${(props) =>
    props.theme.colors && props.theme.colors.mainPurple}; */
`;
export const CardImg = styled.img`
  width: 180px;
  height: 240px;
  border-radius: 20px;
  padding: 10px;
`;

export const CardBackImg = styled.img`
  width: 190px;
  height: 250px;
  background-image: url("src/assets/cardBackImg4.png");
  background-size: cover;
  border-radius: 20px;
`;
