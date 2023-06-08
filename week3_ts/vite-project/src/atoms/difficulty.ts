import { atom } from "recoil";

export const difficultyState = atom<string>({
  key: "difficultyState",
  default: "Easy", //타입추론이 가능하지만 string을 써주는 걸로
});
