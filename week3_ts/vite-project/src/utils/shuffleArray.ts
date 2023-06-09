import { CardData } from "../constant/CARD";

export const shuffleArray = (array: CardData[]) => {
  let newArray = [];
  newArray = array.sort(() => Math.random() - 0.5);
  return newArray;
};
