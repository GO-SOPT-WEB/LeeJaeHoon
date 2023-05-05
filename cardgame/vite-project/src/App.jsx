import { useState } from "react";
import Card from "./components/Card/Card";
import { DATA } from "./constant/Data";
import "./App.css";

const App = () => {
  return (
    <>
      {DATA.map((card) => (
        <Card key={card.title} title={card.title} src={card.src}></Card>
      ))}
    </>
  );
};

export default App;
