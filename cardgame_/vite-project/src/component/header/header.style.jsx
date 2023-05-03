import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  margin-left: auto;
  margin-right: auto;
  padding: 2rem 0;
  height: 10rem;

  background-color: ${(props) => props.theme.colors.mainLightGreen};
`;

export const MainText = styled.h1`
  font-size: ${(props) => props.theme.fontSize.xxl};
  color: ${(props) => props.theme.colors.mainWhite};
`;

export const SubText = styled.h2`
  font-size: ${(props) => props.theme.fontSize.xl};
  color: ${(props) => props.theme.colors.mainWhite};
`;
