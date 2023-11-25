const countAsterisks = (s) => s.split('|').filter((_, i) => i % 2 === 0).join('').split('*').length - 1;

console.log(countAsterisks("a|*|b|*|c")); // Example usage
