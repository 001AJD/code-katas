const characterCount = (input)=> {
  const output = {};
  let charCounter = 0;
  if (typeof input !== 'string') {
    return 'invalid input';
  }
  const inputLength = input.length;
  for (let currentCharacter = 0;
    currentCharacter < inputLength; currentCharacter++) {
    for (let index = 0; index < inputLength; index++) {
      if (input[currentCharacter] === input[index]) {
        charCounter += 1;
      }
    }
    const objectProperty = input[currentCharacter];
    output[objectProperty] = parseInt(charCounter);
    charCounter = 0;
  }
  return output;
};
export {characterCount};
