var reverse = function(x) {
  let n = 0
  let min = -Math.pow(2, 31), max = Math.pow(2, 31) - 1
  while(x != 0) {
      n = n * 10 + x % 10
      x = parseInt(x/ 10)
  }
  return (n >= min && n <= max) ? n : 0

};