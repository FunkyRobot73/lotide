// FUNCTION IMPLEMENTATION
const tail = function(array) {
  let tailA = array.slice(1);
  //console.log(tailA)
  return tailA;
}
// TEST CODE
console.log(tail([5,6,7]));
console.log(tail(["Yo Yo", "Lighthouse", "Labs"]));
console.log(tail(["Tania", "Adele", "Ellie", "Daisy"]));
console.log(tail(["carlito"]));