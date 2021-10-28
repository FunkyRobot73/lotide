const eqArrays = function(array1, array2) {
  sameLength = true;
    if(array1.length === array2.length) {
      console.log(`\nBoth Arrays are of equal length. (AKA :${sameLength})`)
    } else {
      sameLength = false;
      console.log(`\nThese Arrays [${array1}] & [${array2}] are different sizes. (AKA:${sameLength})`)
  }
    if(sameLength) {
    for(x = 0 ; x < array1.length ; x++) {
      console.log(`Does ${array1[x]} === ${array2[x]}❔❔❔`);
      if(array1[x] !== array2[x]) {
        sameLength = false;
        console.log(`🚩🚩🚩Unfortunately this #${array1[x]} Doesn't match this #${array2[x]}!!! (AKA: ${sameLength})`);
        
      }
      if(sameLength) console.log(`😁Looks like we've got a matching pair!`);
      }
      if(sameLength) console.log(`🗨️ 🗨️ 🗨️ Looks like we've got a matching Array! 🗯️ 🗯️ 🗯️`);
      if(!sameLength) console.log(`💤 💤 💤 This isn't a matching  Array! 💤 💤 💤`);
    }

  };
  
const assertArraysEqual = function() {
 eqArrays([1,2,3], [1,2,3]);
 
}

const without = function(array, remove) {
  let newArray = [];
  let newArray2 = [];
  if(remove.length === 1) {
    for(let x of array) {
      //console.log(x);
      if(x !== remove[0]) {
        //console.log(`${x} !== ${remove}`)
        newArray.push(x)
      }
    }
  } else {
    for(let n of array) {
      for(let i = 0; i < remove.length; i++) {
        if(n === remove[i]) {
          newArray.push(n)
        }
      }
    }
    remove = newArray2;
    without(array, remove);
  }
  //console.log(array);
  return newArray;
}

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
    


