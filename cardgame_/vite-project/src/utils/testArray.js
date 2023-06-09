const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const RandomImgList = [...numArr].sort(() => Math.random() - 0.5);

export const selectArray = (level) => {
  let NormalImgList = [];
  switch (level) {
    case "easy":
      NormalImgList = RandomImgList.slice(0, 5);
      break;
    case "normal":
      NormalImgList = RandomImgList.slice(0, 7);
      break;
    default:
      NormalImgList = RandomImgList.slice(0, 9);
  }

  const NormalRandomList = [...NormalImgList, ...NormalImgList].sort(
    () => Math.random() - 0.5
  );

  return NormalRandomList;
};

console.log(selectArray("easy"));
