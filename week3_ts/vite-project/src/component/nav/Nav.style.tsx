import styled from "styled-components";

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30rem;
  gap: 0.5rem;
  padding: 1rem;
`;

export const DifficultyButton = styled.button`
  width: 10rem;
  height: 3rem;

  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.mainLightPink : theme.colors.mainLightBlue};
  color: ${(props) => props.theme.colors.mainWhite};
  font: inherit;
  margin: 0.1rem;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;
