function findLongestWord(string) {
  const toArray = string.split(' ');
  let longestWord = toArray[0];

  for (let i = 1; i < toArray.length; i += 1) {
    if (longestWord.length < toArray[i].length) {
      longestWord = toArray[i];
    }
  }

  return longestWord;
}

console.log(findLongestWord('name nam na nanana aaaaaaaaaaaa'));
