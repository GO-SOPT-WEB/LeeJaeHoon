import React from "react";
import { MainWrapper } from "./Main.style";
import CardList from "../cardList/CardList";
import Nav from "../nav/Nav";
import { useRecoilState } from "recoil";
import { difficultyState, scoreState } from "../../atoms/atom";
import { useSetRecoilState } from "recoil";

import { useState } from "react";

const Main = () => {
  return (
    <MainWrapper>
      <Nav></Nav>
      <CardList></CardList>
    </MainWrapper>
  );
};

export default Main;
