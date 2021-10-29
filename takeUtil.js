const takeUntil = function(array, callback) {
  let result1 = [];
  for(let i of array){
    if(callback(i)){
    return result1
  }
  result1.push(i)
}
};

const array = ["adele", "tania", "ellie", "?", "daisy"];
const results1 = takeUntil(array, x => x === '?');
console.log(results1);

console.log("---");

