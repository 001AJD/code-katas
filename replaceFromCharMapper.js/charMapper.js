/*
let mapper = {
  A:0,
  B:1,
  C:2
}

let myString = "A1:B45:C9"

Replace alphabets with the numeric value from the mapper

expected op = "01:145:29"
*/

// traverse the string
// check if char exists in the mapper
// if yes, replace the char with the key from the mapper
// if not, continue traversing till the end of the string

const replaceChar = (myStr, mapper) =>{
  if (typeof(myStr) !== 'string') {
    return 'invalid input, expected string';
  }
  const strLength = myStr.length;
  const mapperKeys = Object.keys(mapper);
  let result = '';
  for (let i = 0; i < strLength; i++) {
    if (mapperKeys.includes(myStr[i])) {
      result += mapper[myStr[i]];
    } else {
      result+= myStr[i];
    }
  }
  return result;
};

export {replaceChar};
