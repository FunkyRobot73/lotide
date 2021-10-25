// FUNCTION IMPLEMENTATION
const head = function(first, second) {
  first = first[0];
  return first;
}
  const assertEqual = function(actual, expected) {
    //console.log(`Does ${actual} = ${expected} ??`)
    //console.log((console.assert(actual === expected)));
    if (actual === expected ? console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`) : console.log(`😈😈😈 Assertion Failed: [${actual}] !== [${expected}]`));
  
  };

// TEST CODE
console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
console.log(assertEqual(head(["Adele", "Tania", "Ellie"]), "Daisy"));
