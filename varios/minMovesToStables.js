function minMovesToStables(reindeer, stables) {
  //Ordenamiento ASCENDENTE
  reindeer.sort((a, b) => a - b);
  stables.sort((a, b) => a - b);

  let total = 0;

  for (let i = 0; i < reindeer.length; i++) {
    total = total + Math.abs(reindeer[i] - stables[i]);
  }

  console.log(total);
}

// minMovesToStables([2, 6, 9], [3, 8, 5]) // -> 3
minMovesToStables([1, 1, 3], [1, 8, 4]); // -> 8
