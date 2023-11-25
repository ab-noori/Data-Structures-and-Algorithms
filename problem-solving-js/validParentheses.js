const validParentheses = (s) => {
  let stack = []
  let brackets = {
    "(": ")",
    "{": "}",
    "[": "]"
  }

  for (let char of s) {
    if (char in brackets) {
      stack.push(char)
    } else {
      let prev = stack.pop()
      if (char !== brackets[prev]) {
        return false
      }
    }
  }

  return stack.length === 0
}

let res = validParentheses('()[]{');
console.log(res);