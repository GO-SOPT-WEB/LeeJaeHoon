import { useState, useEffect } from "react";

import Header from "./component/header/Header";
import CardList from "./component/cardList/CardList";
import Nav from "./component/nav/Nav";
import Main from "./component/main/Main";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [all, setAll] = useState(5);
  useEffect(() => {
    console.log(count);
  }, [count]);

  const setCounting = () => {
    setCount(count + 1);
  };
  return (
    <>
      <Header correct={count} EA={all}></Header>
      <Main
        correct={count}
        countCorrect={setCounting}
        all={all}
        setAll={setAll}
      ></Main>
    </>
  );
}

export default App;
