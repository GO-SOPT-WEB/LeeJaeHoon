import { useState, useEffect } from "react";

import Header from "./component/header/Header";
import Main from "./component/main/Main";

import styled from "styled-components";
import ModalFrame from "./component/modal/ModalFrame";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import {
  scoreState,
  allCardState,
  setModalState,
  resetState,
} from "./atoms/atom";

import React from "react";
const ResetButton = styled.button`
  position: fixed;

  top: 1rem;
  right: 1rem;
  width: 7rem;
  height: 4rem;

  z-index: 99;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.mainPurple};
  color: ${(props) => props.theme.colors.mainWhite};

  font-size: ${(props) => props.theme.fontSize.md};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  font-family: inherit;
`;

function App() {
  const setReset = useSetRecoilState(resetState);
  const [modal, setModal] = useRecoilState(setModalState);
  const [correct, setCorrect] = useRecoilState(scoreState);
  const allCard = useRecoilValue(allCardState);

  useEffect(() => {
    if (correct === allCard) {
      setModal(true);
    }
  }, [correct]);

  const handleReset = () => {
    setCorrect(0);
    setReset((toggle) => !toggle);
  };
  return (
    <>
      <ResetButton onClick={handleReset}>Reset</ResetButton>
      <Header></Header>
      <Main></Main>
      {modal ? <ModalFrame>🥳🥳 축하합니다!! 🥳🥳</ModalFrame> : <div></div>}
    </>
  );
}

export default App;
