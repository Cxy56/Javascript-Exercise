function deepCopy(obj) {
  let res = Array.isArray(obj) ? [] : {}
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      res[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
    }
  }
  return res
}