function calculateEngravingPrice(message, pricePerWord) {
  const msgLength = message.split(' ').length;
  const engravingPrice = msgLength * pricePerWord;
  return engravingPrice;
}

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20));
