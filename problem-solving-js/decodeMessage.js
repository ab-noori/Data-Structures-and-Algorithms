decodeMessage = (key, message) => {
  let uniqueLetters = Array.from(new Set(key.split(' ').join('')))
  let letterMap = new Map()
  let result = message.split('')

  for (let i = 0; i < uniqueLetters.length; i++) {
      letterMap.set(uniqueLetters[i], String.fromCharCode(97 + i))
  }

  for (let i = 0; i < result.length; i++) {
      if (result[i] !== ' ') {
          result[i] = letterMap.get(result[i])
      }
  }

  return result.join('')
};

console.log(decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv"));