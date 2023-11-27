const alphabet = {
  a: '.-', b: '-...',   c: '-.-.', d: '-..', e: '.', f: '..-.', g: '--.', h: '....', i: '..',  j: '.---',  k: '-.-',  l: '.-..', m: '--',
  n: '-.',  o: '---', p: '.--.',  q: '--.-',  r: '.-.', s: '...', t: '-', u: '..-', v: '...-', w: '.--', x: '-..-',  y: '-.--', z: '--..' 
}

const uniqueMorseRepresentations = words => new Set(words.map(word => word.split('').map(letter => alphabet[letter]).join(''))).size

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
