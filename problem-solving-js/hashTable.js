function hashTable(arr) {
  // Step 1: Create an empty Hash Table (array of arrays) with a length of 11
  const table = Array.from({ length: 11 }, () => []);

  // Step 2: Loop through each element in the input array 'arr'
  for (let i = 0; i < arr.length; i++) {

    // Step 3: Calculate the absolute value of the current element
    const num = Math.abs(arr[i]);

    // Step 4: Calculate the index where the current element should be stored
    const index = num % 11;

    // Step 5: Push the current element to the corresponding index in the Hash Table
    table[index].push(arr[i]);
  }

  // Step 6: Flatten the Hash Table and return the final array
  return table.flat();
}

// Example usage:
console.log(hashTable([12, 24, 125, 5, 91, 1106, 2, 1021, 29, 3536, 10]));
// => [12, 24, 2, 91, 125, 5, 3536, 1106, 29, 1021, 10]

console.log(hashTable([2, 341, 73, 8265, 234004, 602, 7400000, 200000000]));
// => [341, 234004, 2, 200000000, 7400000, 8265, 73, 602]
