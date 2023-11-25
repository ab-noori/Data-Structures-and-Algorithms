const strStr = (haystack, needle) => {
  if (needle === '' || needle === haystack) return 0;
  if (haystack.length < needle.length) return -1;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let j = 0;
      while (haystack[i + j] === needle[j]) {
        j++;
        if (j === needle.length) return i;
      }
    }
  }

  return -1;

};

let haystack = "sadbutsad"
let needle = "sad"
console.log(strStr(haystack, needle));

//--------------------------------------------------------------

const strStr = (haystack, needle) => {
  const arr = haystack.split(needle);
  if(arr.length === 1) return -1;
  return arr[0].length;
}

let haystack = "butsadbutsad"
let needle = "sad"
console.log(strStr(haystack, needle));