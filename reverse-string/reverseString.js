const reverseString = (input) => {
  let reverse = '';
  if (typeof input !== 'string') {
    return 'invalid input';
  }
  const inputLength = input.length;
  for (let i = inputLength-1; i >= 0; i--) {
    reverse += input.charAt(i);
  }
  return reverse;
};

export {reverseString};
