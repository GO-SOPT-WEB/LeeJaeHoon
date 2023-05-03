import styled from "styled-components";

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30rem;
  gap: 0.5rem;
  padding: 3rem;
`;

export const DifficultyButton = styled.button`
  width: 10rem;
  height: 3rem;
  background-color: ${(props) => props.theme.colors.mainLightBlue};
  font: inherit;
  color: ${(props) => props.theme.colors.mainWhite};
  margin: 0.1rem;
  border-radius: 10px;
`;
