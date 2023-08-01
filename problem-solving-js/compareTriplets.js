// Challenge Instructions:
// Alice and Bob each created one problem for HackerRank. They were rated on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.
// The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].
// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i] < b[i], then Bob is awarded 1 point.
// If a[i] = b[i], then neither person receives a point.
// Comparison points are the total points a person earned.

// Solution:
function compareTriplets(a, b) {
  let alice_score = 0;
  let bob_score = 0;

  // Compare the elements of a and b one by one using a for loop
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      alice_score += 1;
    } else if (a[i] < b[i]) {
      bob_score += 1;
    }
  }

  return [alice_score, bob_score];
}

// Example usage:
const result1 = compareTriplets([5, 6, 7], [3, 6, 10]);
console.log(result1);
// Output: [1, 1]

const result2 = compareTriplets([17, 28, 30], [99, 16, 8]);
console.log(result2);
// Output: [2, 1]
