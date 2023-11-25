const strStr = (haystack, needle) => {
    let arr = haystack.split(needle);
    console.log(arr)
    if(arr.length == 1) return -1;
    else return arr[0];
};

strStr("sadbutsad", "sadj")