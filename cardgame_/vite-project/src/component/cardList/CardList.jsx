import React from "react";
import { DATA } from "./../../constant/CARD";
import CardItem from "../cardItem/CardItem";

import { doubleArray } from "./../../utils/doubleArray";

import { CardListWrapper, CardItmeList } from "./CardList.style";
const CardList = ({ difficulty, onClick, cardFilp }) => {
  console.log(doubleArray(DATA.slice(0, 5)));
  return (
    <CardListWrapper>
      {difficulty === "Easy" && (
        <CardItmeList>
          {doubleArray(DATA.slice(0, 5)).map((card, i) => {
            return (
              <CardItem
                key={i}
                src={card.src}
                id={card.id}
                onClick={onClick}
                cardFilp={cardFilp}
              ></CardItem>
            );
          })}
        </CardItmeList>
      )}
      {difficulty === "Normal" && (
        <CardItmeList>
          {doubleArray(DATA.slice(0, 7)).map((card, i) => {
            return (
              <CardItem
                key={i}
                src={card.src}
                id={card.id}
                onClick={onClick}
                cardFilp={cardFilp}
              ></CardItem>
            );
          })}
        </CardItmeList>
      )}
      {difficulty === "Hard" && (
        <CardItmeList>
          {doubleArray(DATA.slice(0, 9)).map((card, i) => {
            return (
              <CardItem
                key={i}
                src={card.src}
                id={card.id}
                onClick={onClick}
                cardFilp={cardFilp}
              ></CardItem>
            );
          })}
        </CardItmeList>
      )}
      {/* {DATA.map((card) => (
        <CardItem key={card.title} src={card.src}></CardItem>
      ))} */}
    </CardListWrapper>
  );
};

export default CardList;
