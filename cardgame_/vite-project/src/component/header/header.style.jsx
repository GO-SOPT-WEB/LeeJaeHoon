import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  margin-left: auto;
  margin-right: auto;

  height: 128px;

  background-color: ${(props) => props.theme.colors.mainLightGreen};
  font-size: ${(props) => props.theme.fontSize.xxl};
  color: ${(props) => props.theme.colors.mainWhite};
`;
