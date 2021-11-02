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
}

const middle = function(arrayMiddle) {
  let arrayM = [];
  if(arrayMiddle.length <= 2) {
    //console.log(arrayM); 
  return arrayM;
}
  if(arrayMiddle.length % 2 === 1) {
    arrayM.push(arrayMiddle[(arrayMiddle.length -1) / 2])
    //console.log(arrayM);
    return arrayM;
  }
  if(arrayMiddle.length % 2 === 0) {
    arrayM.push(arrayMiddle[(arrayMiddle.length) / 2 -1])
    arrayM.push(arrayMiddle[(arrayMiddle.length) / 2])
    //console.log(arrayM);
    return arrayM;
    
};

}


//console.log(assertArraysEqual(middle([1]),[]));
// assertArraysEqual(middle([]),[]);
// assertArraysEqual(middle([1,2]),[]);
// assertArraysEqual(middle([1, 2, 3]),[2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
// assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5 ,6]),[3,4]);
// console.log(middle([1, 2], []));
// console.log(middle([1, 2, 3], [2]));
// console.log(middle([1, 2, 3, 4, 5],[3]));
// console.log(middle([1, 2, 3, 4],[2, 3]));
// console.log(middle([1, 2, 3, 4, 5, 6], [3, 4]));

module.exports = eqArrays;
module.exports = assertArraysEqual;
module.exports = middle;

