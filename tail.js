const assertEqual = require('./assertEqual');

const tail = function(array) {
  array = array[array.length -1];
  return array;
}
// TEST CODE
// console.log(tail([5,6,7]));
// console.log(tail(["Yo Yo", "Lighthouse", "Labs"]));
// console.log(tail(["Tania", "Adele", "Ellie", "Daisy"]));
// console.log(tail(["carlito"]));

module.exports = tail;