import { useState } from "react";
import Card from "./component/card/cardItem";
import { DATA } from "./constant/CARD";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {DATA.map((card) => (
        <Card key={card.title} title={card.title} src={card.src}></Card>
      ))}
    </>
  );
}

export default App;
