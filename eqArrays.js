const eqArrays = function(array1, array2) {
  if(array1.length !== array2.length) return false; 
// THIS COMPARES ARRAY1 to ARRAY2 ****
  
  for(let x = 0 ; x < array1.length ; x++) {
    if(array1[x] !== array2[x]) return false;
    
  }
  return true;  
};


// const assertEqual = function(actual, expected) {
//   if (actual === expected ? console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`) : console.log(`😈😈😈 Assertion Failed: [${actual}] !== [${expected}]`));
  
// };

// console.log(eqArrays([1, 2, 3], [1, 2])); // => false
// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

module.exports = eqArrays;

// (eqArrays([5,6,7], [5,6,5]));
// (eqArrays(["Yo Yo", "Lighthouse", "Labs"],["Yo Yo", "Lighthouse", "Labs"]));
// (eqArrays(["Tania", "Adele", "Ellie", "Daisy"], ["Tania", "Adele", "Ellie"]));
// (eqArrays(["carlito"], ["carlito"]));

