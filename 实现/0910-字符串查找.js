function isContain(a, b) {
  for (let i in b) {
    if (a[0] === b[i]) {
      let tmp = true;
      for (let j in a) {
        if (a[j] !== b[~~i + ~~j]) {
          tmp = false;
        }
      }
      if (tmp) {
        return i;
      }
    }
  }
  return -1;
}
a='34';b='1234567'; // 返回 2
c='35';d='1234567'; // 返回 -1
e='355';f='12354355'; // 返回 5
console.log(isContain(a,b))
console.log(isContain(c,d))
console.log(isContain(e,f))