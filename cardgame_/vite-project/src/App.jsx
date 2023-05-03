import { useState } from "react";

import Header from "./component/header/Header";
import CardList from "./component/cardList/CardList";
import Nav from "./component/nav/Nav";
import Main from "./component/main/Main";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header correct={2} EA={5}></Header>
      <Main></Main>
    </>
  );
}

export default App;
