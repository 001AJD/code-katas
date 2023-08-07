const linearSearch = (arr, searchElement) => {
  // return -1 if search element is not present in the given array
  let result = -1;
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    if (arr[i] === searchElement) {
      result = i;
      break;
    }
  }
  return result;
};

export {linearSearch};
