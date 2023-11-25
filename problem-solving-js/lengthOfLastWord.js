var lengthOfLastWord = function(s) {
    let strToarr = s.trim().split(' ')
    let lastWordLength = strToarr[strToarr.length-1].length;
    console.log(lastWordLength);
};

lengthOfLastWord('fly me   to   the moon')