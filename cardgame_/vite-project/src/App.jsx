import { useState, useEffect } from "react";

import Header from "./component/header/Header";
import Main from "./component/main/Main";

import styled from "styled-components";

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
  const [correct, setCorrect] = useState(0);
  const [all, setAll] = useState(5);
  const [reset, setReset] = useState(false);
  useEffect(() => {}, [correct]);

  const handleReset = () => {
    setCorrect(0);
    setReset((toggle) => !toggle);
    console.log(reset);
  };

  return (
    <>
      <ResetButton onClick={handleReset}>Reset</ResetButton>
      <Header correct={correct} EA={all}></Header>
      <Main
        correct={correct}
        setCorrect={setCorrect}
        setAll={setAll}
        reset={reset}
      ></Main>
    </>
  );
}

export default App;
