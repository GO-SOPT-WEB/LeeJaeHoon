export const shuffleArray = (array) => {
  let newArray = [];
  newArray = array.sort(() => Math.random() - 0.5);
  return newArray;
};
