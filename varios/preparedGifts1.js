function preparedGifts(gifts) {
  let bag = new Set(gifts);

  return (bag = Array.from(bag).sort((a, b) => a - b));
  // return bag = [...bag].sort((a, b) => a - b);

  // let bag = new Set();
  // for (let i = 0; i < gifts.length; i++) {
  //     bag.add(gifts[i]);
  // }

  // const puntos = gifts;
  // puntos.sort(); // [1, 10, 2, 21]
  // return puntos
}

// const pedo = [3, 1, 2, 3, 4, 2, 5]
// const algo = preparedGifts(pedo)
// console.log(algo) // [1, 2, 3, 4, 5]
console.log(preparedGifts([3, 1, 2, 3, 4, 2, 5])); // [1, 2, 3, 4, 5]
