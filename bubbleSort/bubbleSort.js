const bubbleSort = (arr) => {
  if (!Array.isArray(arr)) {
    return 'invalid input';
  }
  // sorts the number array in ascending order
  const arrLength = arr.length;
  const iterations = arrLength - 1;
  for (let j = 0; j <= iterations; j++) {
    for (let index = 0; index < (arrLength - 1); index++) {
      if (arr[index] > arr[index+1]) {
        const temp = arr[index];
        arr[index] = arr[index+1];
        arr[index+1] = temp;
      }
    }
  }
  return arr;
};

export {bubbleSort};
