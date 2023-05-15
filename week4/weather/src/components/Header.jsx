import React from "react";
import styled from "styled-components";
import { theme } from "./../styles/theme";
const Header = () => {
  return (
    <HeaderWrapper>
      <MainText>날씨 요정 재훈이</MainText>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  height: 10rem;
  background-color: ${theme.colors.mainNavy};

  justify-content: center;
  align-items: center;
`;
const MainText = styled.h1`
  font-size: ${theme.fontSize.xl};
  color: ${theme.colors.mainWhite};
`;

export default Header;
