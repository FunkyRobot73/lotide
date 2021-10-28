const assertEqual = function(actual, expected) {
  if (actual === expected ? console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`) : console.log(`😈😈😈 Assertion Failed: [${actual}] !== [${expected}]`));
  
};

const findKeyByValue = function(object, value) {
  for(let genre in object)
  //console.log(object[genre]);  // =====>   Very Important!!!!  NAME OF SHOW!!!
    if(object[genre] === value) return genre;
  
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

//findKeyByValue(bestTVShowsByGenre, "The Wire")
//findKeyByValue(bestTVShowsByGenre, "That '70s Show")

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
