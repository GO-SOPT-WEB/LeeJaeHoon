import { useState, useEffect } from "react";

import Header from "./component/header/Header";
import CardList from "./component/cardList/CardList";
import Nav from "./component/nav/Nav";
import Main from "./component/main/Main";
import "./App.css";

function App() {
  const [correct, setCorrect] = useState(0);
  const [all, setAll] = useState(5);
  useEffect(() => {
    console.log(correct, " ", all);
  }, [correct, all]);

  return (
    <>
      <Header correct={correct} EA={all}></Header>
      <Main correct={correct} setCorrect={setCorrect} setAll={setAll}></Main>
    </>
  );
}

export default App;
