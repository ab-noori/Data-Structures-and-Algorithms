const mostWordsFound = (sentences) => {
  let max = 0;
  let temp = 0;
  for (let i = 0; i < sentences.length; i++) {
    temp = sentences[i].split(' ').length;
    if (temp > max) {
      max = temp;
    }
  }
  return max;
};

let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];
console.log(mostWordsFound(sentences));

//------------------------------------------------------------

const mostWordsFound = (sentences) => {
  let [max, temp] = [0, 0];
  for (let sentence of sentences) {
    temp = sentence.split(' ').length;
    max = temp > max? temp : max;
  }
  return max;
};

let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];
console.log(mostWordsFound(sentences));