const assertEqual = function(actual, expected) {
  if (actual === expected ? console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`) : console.log(`😈😈😈 Assertion Failed: [${actual}] !== [${expected}]`));
  
};

const letterPositions = function(sentence) {
  const results = {};
  let letterArray = [];
  let repeat = 1;
  
  letterArray = sentence.split("");
  for(let letter of letterArray){
  if (results[letter]) {
    results[letter] += 1;
  } else {
    results[letter] = 1;
  }

}
  return results;
};

console.log(letterPositions("hello"));
console.log(letterPositions("bookeeper loving bookkeeping"));

assertEqual(letterPositions("hello").e, [1]);
assertEqual(letterPositions("hello").e, 1);

