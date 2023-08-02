/* Write a function called 'capitalizeWords' that takes in a string and returns the string with the first letter of each word capitalized. */

const capitalizeString = (myString) => {
  console.log(typeof(myString));
  if (typeof(myString) !== 'string') {
    return 'invalid input, expected string';
  }
  const myStrArray = myString.split(' ');
  let result = '';
  myStrArray.forEach((elem, index) => {
    const upperCaseLetter = elem.charAt(0).toUpperCase();
    const temp = elem.slice(1);
    myStrArray[index] = upperCaseLetter+temp;
  });
  result = myStrArray.toString();
  result = result.replace(',', ' ');
  return result;
};
export {capitalizeString};
