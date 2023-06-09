import { CardData } from "../constant/CARD";

export const doubleArray = (DATA: CardData[]) => {
  return [...DATA, ...DATA];
};
