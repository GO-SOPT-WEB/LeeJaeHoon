import styled from "styled-components";

export const ModalPortalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  position: fixed;
  top: 40%;
  left: 50%;

  transform: translate(-50%, -50%);
  z-index: 100;

  width: 30rem;
  height: 15rem;

  border-radius: 20px;
  padding: 2rem;
  background-color: ${(props) => props?.theme.colors.mainLightPink};

  font-size: ${(props) => props?.theme.fontSize.lg};
  color: ${(props) => props?.theme.colors.mainWhite};
`;

export const ModalBtn = styled.button`
  width: 20rem;
  height: 3rem;

  border-radius: 6px;
  font-family: inherit;
  font-size: ${(props) => props?.theme.fontSize.sm};
  background-color: ${(props) => props?.theme.colors.mainDarkPink};
  color: ${(props) => props?.theme.colors.mainWhite};
`;
