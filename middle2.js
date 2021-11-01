let arrayM = [];
const middle = function(arrayMiddle) {
  if(arrayMiddle.length > 2) {
    arrayMiddle = arrayMiddle.slice(1, -1);
    middle(arrayMiddle);
  } 
//console.log(arrayMiddle);
return arrayMiddle;
};



console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));

