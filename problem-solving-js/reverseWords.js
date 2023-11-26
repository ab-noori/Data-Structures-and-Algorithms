reverseWords = (s) => {
  return s.split('').reverse().join('').split(' ').reverse().join(' ')
}

console.log(reverseWords('This is an example!'));