const interpret = (command) => {
  return command.split("()").join("o").split("(al)").join("al");
};

console.log(interpret("G()(al)"));

//----------------------------------------------------------

const interpret = (command) => {
  return command.replaceAll('()', 'o').replaceAll('(al)', 'al')
};

console.log(interpret("G()(al)"));