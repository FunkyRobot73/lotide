const eqArrays = function(array1, array2) {
  if(array1.length !== array2.length) return false; 
// THIS COMPARES ARRAY1 to ARRAY2 ****
  
  for(let x = 0 ; x < array1.length ; x++) {
    if(array1[x] !== array2[x]) return false;
    
  }
  return true;  
};
  
const assertArraysEqual = function(array1, array2) {
  if(eqArrays(array1, array2) === true)
  {console.log(`✅✅✅ Assertion Passed`)}
  else
  {console.log(`❌❌❌ Assertion Failed`)};

  // if(eqArrays) console.log(`✅✅✅ Assertion Passed`)
  // if (!eqArrays) console.log(`❌❌❌ Assertion Failed`)
}

// assertArraysEqual([1, 2, 3], [1, 2]);
// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([], []);

module.exports = eqArrays;
module.exports = assertArraysEqual;

// // index.js
// const head = require('./head');
// const tail   = require('./tail');
// const middle = require('./middle');
// const eqArrays = require('./eqArrays')
// const assertEqual = require('./assertEqual')
// const assertArraysEqual = require('./assertArraysEqual')

// module.exports = {
//   head:   head,
//   tail:   tail,
//   middle: middle
// };
