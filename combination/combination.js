const arrayCombination = (arr) => {
  // returns all possible pairs
  return Math.pow(2, arr.length);
};

const getUniqueCombinations = (arr) => {
  /*
    formula for unique pairs excluding itself
    (number of elements in array)^2 - number of elements in array
  */
  const uniqueCombinations = (arr.length * arr.length) - arr.length;
  return uniqueCombinations;
};

const getCombinations = (arr) => {
  const resultArr = [];
  const iteration = getUniqueCombinations(arr);
  for (let i = 0; i < iteration; i++) {
    for (let j = i+1; j < arr.length; j++) {
      resultArr.push(arr[i]);
      resultArr.push(arr[j]);
    }
  }
  return resultArr;
};

export {arrayCombination, getCombinations};

