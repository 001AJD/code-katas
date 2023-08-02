const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 5);

console.log(result);

const numberArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9];
console.log(numberArray.filter((num, index) => numberArray.indexOf(num) === index));

console.log(numberArray.map((num, index) => numberArray.indexOf(num) === index ));
