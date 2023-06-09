import { atom } from "recoil";

export const difficultyState = atom<string>({
  key: "difficultyState",
  default: "Easy", //타입추론이 가능하지만 string을 써주는 걸로
});

export const scoreState = atom<number>({
  key: "scoreState",
  default: 0,
});

export const allCardState = atom<number>({
  key: "allCardState",
  default: 5,
});

export const setModalState = atom<boolean>({
  key: "setModalState",
  default: false,
});

export const resetState = atom<boolean>({
  key: "resetState",
  default: false,
});

export const selectTwoCardState = atom<number[]>({
  key: "selectTwoCardState",
  default: [],
});
