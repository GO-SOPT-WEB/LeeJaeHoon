import { DATA } from "../constant/CARD.js";

export const doubleArray = (DATA) => {
  const datas = DATA.map((data) => data);
  return datas.concat(datas);
};
