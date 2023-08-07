// accepts ascending ordered number array
const binarySearch = (arr, searchElement) => {
  // returns -1 if the search element is not present in the input array
  let result = -1;
  let startIndex; let endIndex; let midIndex;
  startIndex = 0;
  endIndex = ( arr.length - 1);

  while (startIndex <= endIndex) {
    midIndex = parseInt(((startIndex + endIndex) / 2), 10);
    if (arr[midIndex] === searchElement) {
      result = midIndex;
      console.log('found the element');
      break;
    }
    if (arr[midIndex] < searchElement) {
      startIndex = midIndex + 1;
    }
    if (arr[midIndex] > searchElement) {
      endIndex = mid - 1;
    }
  }
  return result;
};

export {binarySearch};
