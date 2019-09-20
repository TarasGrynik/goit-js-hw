function formatString(string) {
  const customStrLength = 40;

  if (string.length > customStrLength) {
    return `${string.slice(0, 40)}...`;
  }

  return string;
}

console.log(formatString('asd asd as dasda sdas d asdasdasd asdasdasd asdasdasdas dasdasdasda sdasdasdas dasda'));

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));

console.log(formatString('Curabitur ligula sapien.'));
