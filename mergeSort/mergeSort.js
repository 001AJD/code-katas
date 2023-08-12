const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  } else {
    const middle = Math.floor(arr.length/2);
    const leftArr = mergeSort(arr.slice(0, middle));
    const rightArr = mergeSort(arr.slice(middle));

    return merge(mergeSort(leftArr), mergeSort(rightArr));
  }
};

const merge = (leftArr, rightArr) => {
  const result = [];
  let leftIndex = 0; let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      result.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
};

export {mergeSort};
