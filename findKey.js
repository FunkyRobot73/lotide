const assertEqual = function(actual, expected) {
  if (actual === expected ? console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`) : console.log(`😈😈😈 Assertion Failed: [${actual}] !== [${expected}]`));
  
};

const findKey = function(object,callback) {
  //console.log(object.adele.stars);
  //let result = 0;
  for(let obj in object) {
    //console.log(obj);
    if(callback(object[obj])) {  //find the 2
      //console.log(x)
      // result = object.x.stars
      // console.log(result);
      return obj
    }
  }
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 },
  adele:       { stars: 3 }
}, x => x.stars == 2) // => "noma"
);
