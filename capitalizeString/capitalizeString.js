/* Write a function called 'capitalizeWords' that takes in a string and returns the string with the first letter of each word capitalized. */

const capitalizeString = (myString) => {
  let myStrArray = myString.split(' ');
  myStrArray.forEach((elem, index) => {
    let upperCaseLetter = elem.charAt(0).toUpperCase();
    console.log(upperCaseLetter);
    let temp = elem.slice(1);
    myStrArray[index] = upperCaseLetter+temp
  });
  return myStrArray.toString();
};

console.log(capitalizeString("hello world"));
