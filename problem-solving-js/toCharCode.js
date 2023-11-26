const toCharCode = (char) => char.charCodeAt()

const cellsInRange = (s) => {
  const result = []
  for(let i = toCharCode(s[0]) ; i <= toCharCode(s[3]) ; i++){
      for(let j = s[1] ; j <= s[4] ; j++){
          result.push(String.fromCharCode(i) +j)
      }
  }
  return result
};

console.log(cellsInRange("B1:J3"))