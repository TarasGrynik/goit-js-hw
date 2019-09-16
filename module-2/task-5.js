function checkForSpam(str) {
  const toLowerStr = str.toLowerCase();
  const findWords = ['spam', 'sale'];
  for (let i = 0; i < findWords.length; i += 1) {
    if (toLowerStr.indexOf(findWords[i]) !== -1) {
      return true;
    }
  }
  return false;
}

console.log(checkForSpam('Latest technology news'));
console.log(checkForSpam('[SPAM] How to earn fast money?'));
console.log(checkForSpam('Get best sale offers now!'));
