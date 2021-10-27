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
    if(!sameLength) console.log(`💤 💤 💤 This isn't a matching  a matching Array! 💤 💤 💤`);
  }
};

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
eqArrays(["1", "2", "3", "4"], ["1", "2", 3])