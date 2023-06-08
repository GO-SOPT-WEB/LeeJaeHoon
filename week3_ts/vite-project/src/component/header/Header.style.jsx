import styled, { css, keyframes } from "styled-components";

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

const textShadowAnimation = keyframes`
  0% {
    text-shadow: none;
  }
  100% {
    text-shadow: 0 0 10px #e9f819, 0 0 20px #e9f819, 0 0 40px #e9f819;
  }
`;

const textScaleAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
`;

// SubTextAnimation 컴포넌트 스타일링
export const SubTextAnimation = styled(SubText)`
  font-size: ${(props) => props.theme.fontSize.xl};

  ${({ animation }) =>
    animation &&
    css`
      animation: ${textShadowAnimation} 1s ease-in-out,
        ${textScaleAnimation} 1.3s ease-in-out;
    `}
`;
