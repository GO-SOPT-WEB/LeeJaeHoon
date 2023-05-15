import React from "react";
import styled from "styled-components";

export const ErrorPage = () => {
  return (
    <ErrorPageWrapper>
      <ErrorText>ErrorPage</ErrorText>
    </ErrorPageWrapper>
  );
};

const ErrorPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const ErrorText = styled.h1`
  font-size: ${(props) => props.theme.fontSize.xl};
`;
