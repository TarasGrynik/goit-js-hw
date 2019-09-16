function formatString(string) {
  const customStrLength = 40;
  const toArray = string.split('');
  const cutArray = toArray.slice(0, 40);
  cutArray.push('...');

  if (string.length < customStrLength) {
    return string;
  }
  return cutArray.join('');
}

console.log(
  formatString(
    'asd asd as dasda sdas d asdasdasd asdasdasd asdasdasdas dasdasdasda sdasdasdas dasda',
  ),
);

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);

console.log(formatString('Curabitur ligula sapien.'));
