import React from "react";
import { MainWrapper } from "./Main.style";
import CardList from "../cardList/CardList";
import Nav from "../nav/Nav";

const Main = () => {
  return (
    <MainWrapper>
      <Nav></Nav>
      <CardList></CardList>
    </MainWrapper>
  );
};

export default Main;
