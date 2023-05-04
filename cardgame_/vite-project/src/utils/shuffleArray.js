export const shuffleArray = (array) => {
  let newArray = [];
  newArray = array.sort(() => Math.random() - 0.5);
  return newArray;
};

console.log(shuffleArray([1, 2, 3, 4, 5]));
