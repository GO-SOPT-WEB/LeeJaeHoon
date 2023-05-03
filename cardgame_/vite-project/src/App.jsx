import { useState } from "react";
import Card from "./component/card/cardItem";
import { DATA } from "./constant/CARD";
import Header from "./component/header/header";
import "./App.css";
import styled from "styled-components";

const CardListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 300px;

  flex-wrap: wrap;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header correct={2} EA={5}></Header>
      <CardListWrapper>
        {DATA.map((card) => (
          <Card key={card.title} src={card.src}></Card>
        ))}
      </CardListWrapper>
    </>
  );
}

export default App;
