/*
Write a function called uniqueElements that takes in an array and returns a new array with only the unique elements from the original array, removing any duplicates.
uniqueElements([1, 2, 3, 4, 3, 2, 1, 5]);
output: [1, 2, 3, 4, 5]
*/

const getUniqueElements = (numberArray) => {
  if (!Array.isArray(numberArray)) {
    return 'invalid input, expected array';
  }
  const uniqueElements = [];
  numberArray.map((elem)=>{
    if (!uniqueElements.includes(elem)) {
      uniqueElements.push(elem);
    }
  });
  return uniqueElements;
};

const uniqueElementsFilterMethod = (numberArray) => {
  let uniqueElements = [];
  uniqueElements = numberArray.filter((item,
      index) => numberArray.indexOf(item) === index);
  return uniqueElements;
};

export {getUniqueElements};
