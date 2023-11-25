const checkOnesSegment = s => {
  let count = 0;

  for (let char of s) {
      if (char === '1') {
          count++;
      } else if (char === '0') {
          count--;
      }

      if (count > 1) {
          return true;
      }
  }

  return false;
};

console.log(checkOnesSegment("110")); // Example usage
