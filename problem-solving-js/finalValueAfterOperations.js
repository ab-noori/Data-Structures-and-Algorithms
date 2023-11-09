const finalValueAfterOperations = (operations) => {
  let result = 0;
  for (let ops of operations) {
    if (ops.includes('++')) {
      result++;
    } else {
      result--;
    }
  }
  return result;
};

let operations = ["--X","X++","X++"];
console.log(finalValueAfterOperations(operations));

//---------------------------------------------------------
const finalValueAfterOperations = (ops) => {
  let res = 0;
  ops.map((op) => {
    if(op.includes('++')) res++;
    else res--;
  })
  return res;
};

let operations = ["--X","X++","X++"];
console.log(finalValueAfterOperations(operations));