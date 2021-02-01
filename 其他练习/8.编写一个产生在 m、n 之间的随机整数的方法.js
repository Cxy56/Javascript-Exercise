function genNum(n,m) {
  return Math.floor(Math.random()* n + (m-n))
}

console.log(genNum(3, 6))