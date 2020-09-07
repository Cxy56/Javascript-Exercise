function toTuoFeng(str, identifier) {
  let strArr = str.split(identifier)
  if(strArr.length <= 1) return str
  for(let i = 1; i < strArr.length; i++) {
    let first = strArr[i].slice(0,1).toUpperCase()
    strArr[i] = first + strArr[i].slice(1)
  }
  return strArr.join('')
}
console.log(toTuoFeng('hello-wlord', '-'))

function toTuoFeng2(s) {
  return s.replace(/-\w/g, function(str){
    return str.slice(1).toUpperCase()
  })
}

console.log(toTuoFeng2('hello'))
console.log(toTuoFeng2('hello-wlord'))