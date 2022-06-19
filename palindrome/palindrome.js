const isPalindrome = (input)=> {
  let result = false;
  if (reverse(input) === input) {
    result = true;
  }
  return result;
};

const reverse = (str) => {
  const strLength = str.length;
  let result = '';
  for (let index = (strLength - 1); index >= 0; index--) {
    result += str[index];
  }
  return result;
};

export {isPalindrome};
