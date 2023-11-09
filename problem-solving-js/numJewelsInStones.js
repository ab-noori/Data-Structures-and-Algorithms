const numJewelsInStones = (jewels, stones) => {
  let count = 0;
  for (let stone of stones) {
    if (jewels.includes(stone)) {
      count++;
    }
  }
  return count;
};

let jewels = "aA", stones = "aAAbbbb";
console.log(numJewelsInStones(jewels, stones));


