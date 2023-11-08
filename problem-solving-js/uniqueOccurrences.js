const uniqueOccurrences = (arr) => {
    const map = {};
    for (let num of arr) {
      map[num] = (map[num] || 0) + 1;
    }
  
    const values = Object.values(map);
    const set = new Set(values);
    return set.size === values.length;
  }

  let res = uniqueOccurrences([1,2,2,1,1,3]);
  console.log(res);