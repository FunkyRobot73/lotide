const countLetters = function(string) {
  let letters = {};
  let letterArray = [];
  letterArray = string.split("");
  for (let letter of letterArray) {
    if (letters[letter]) {
      letters[letter] += 1;
    } else {
      letters[letter] = 1;
    }
  }
  return letters;
};

console.log(countLetters("adele"));
console.log(countLetters("tania"));
console.log(countLetters("bookkeeper"));