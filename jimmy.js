const stringer = function() {
  let newStr = "";
  for (let j = 0; j < process.argv.length; j++) {
    console.log(j + ' -> ' + (process.argv[j]));
}
  for(x = str.length -1; x >= 0; x--) {
  newStr += str[x];
  }
  return (newStr);
}

console.log(stringer());
//str = process.argv;

//let sum = (parseFloat(args[2]) + parseFloat(args[3]));
