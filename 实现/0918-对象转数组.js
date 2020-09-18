function changeObj(obj) {
  let arr = new Array(12)
  console.log(arr.length)
  for(let i = 0 ; i < 12; i++) {
    if(obj[i+1] !== undefined) {
      console.log('obj[i+1]', obj[i+1])
      arr[i] = obj[i+1]
    } else {
      arr[i] = null
    }
  }
  console.log('arr', arr)
}

changeObj({1:222, 2:123,4: 0, 5:888})

// !! let arr = Array.from({length:12}).fill(null);

let obj = {1:222, 2:123, 4: 0, 5:888};
const result = Array.from({ length: 12 }).map((_, index) => obj[index + 1] || null);
console.log(result)