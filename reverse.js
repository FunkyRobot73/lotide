
const stringer = function() {
    let strB = "";
    for (let j = 2; j < process.argv.length; j++) {
      //console.log(j + ' -> ' + (process.argv[j]));
      let newStr = "";
      for (let x = process.argv[j].length - 1; x >= 0; x--) {
        
        newStr += process.argv[j][x];
      }
      strB += newStr + " ";
      //return (newStr);
    }
    return strB;
  };
  
  console.log(stringer());