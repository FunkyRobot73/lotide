const words = ["dust", "bites", "one", "another", "the"];
const words1 = ["ground", "control", "to", "major", "tom"];
const words2 = ["had", "love", "once", "eye", "ahh"];

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
      console.log(`Does ${array1[x]} === ${array2[x]}âââ`);
      if(array1[x] !== array2[x]) {
        sameLength = false;
        console.log(`ð©ð©ð©Unfortunately this #${array1[x]} Doesn't match this #${array2[x]}!!! (AKA: ${sameLength})`);
        
      }
      if(sameLength) console.log(`ðLooks like we've got a matching pair!`);
      }
      if(sameLength) console.log(`ð¨ï¸ ð¨ï¸ ð¨ï¸ Looks like we've got a matching Array! ð¯ï¸ ð¯ï¸ ð¯ï¸`);
      if(!sameLength) console.log(`ð¤ ð¤ ð¤ This isn't a matching  a matching Array! ð¤ ð¤ ð¤`);
    }
  };

  const assertArraysEqual = function() {
    eqArrays(words, words1);
    
   }



const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


const results1 = map(words, word => word[0]);
console.log(results1);



// const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];
// let lightNum = lighthouses.map(x => x.length);
// console.log(lightNum);