import React from "react";
import { DATA } from "./../../constant/CARD";
import CardItem from "../cardItem/CardItem";

import { CardListWrapper, CardItmeList } from "./CardList.style";
const CardList = ({ difficulty }) => {
  return (
    <CardListWrapper>
      {difficulty === "Easy" && (
        <CardItmeList>
          {DATA.slice(0, 5).map((card) => (
            <CardItem key={card.title} src={card.src}></CardItem>
          ))}
        </CardItmeList>
      )}
      {difficulty === "Normal" && (
        <CardItmeList>
          {DATA.slice(0, 7).map((card) => (
            <CardItem key={card.title} src={card.src}></CardItem>
          ))}
        </CardItmeList>
      )}
      {difficulty === "Hard" && (
        <CardItmeList>
          {DATA.slice(0, 9).map((card) => (
            <CardItem key={card.title} src={card.src}></CardItem>
          ))}
        </CardItmeList>
      )}
      {/* {DATA.map((card) => (
        <CardItem key={card.title} src={card.src}></CardItem>
      ))} */}
    </CardListWrapper>
  );
};

export default CardList;
