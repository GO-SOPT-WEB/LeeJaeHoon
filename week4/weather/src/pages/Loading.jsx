import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <LoadingWrapper>
      <LoadingText>...Loading</LoadingText>
    </LoadingWrapper>
  );
};

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const LoadingText = styled.h1`
  font-size: ${(props) => props.theme.fontSize.xl};
`;
export default Loading;
