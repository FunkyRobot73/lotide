
const middle = function(arrayMiddle) {
  let arrayM = [];
  if(arrayMiddle.length <= 2) return arrayMiddle;
  if(arrayMiddle.length % 2 === 1) {
    arrayM.push(arrayMiddle[(arrayMiddle.length -1) / 2])
    return arrayM;
  }
  if(arrayMiddle.length % 2 === 0) {
    arrayM.push(arrayMiddle[(arrayMiddle.length) / 2 -1])
    arrayM.push(arrayMiddle[(arrayMiddle.length) / 2])
    return arrayM;
    
};

}

console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));

