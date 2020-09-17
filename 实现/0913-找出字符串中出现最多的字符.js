function getMax(str) {
  let obj = {}
  for (let i in str) {
    obj[str[i]] ? obj[str[i]]++ : (obj[str[i]] = 1)
  }
  let keys = Object.keys(obj)
  let vals = Object.values(obj)
  let maxVal = Math.max(...vals)
  return {
    max: keys[vals.indexOf(maxVal)],
    number: maxVal
  }
}

console.log(getMax("adfasdfadsfsa111qwqer222223r"));


function getMaxOne(str) {
  var newStr = str.split('').sort().join('')
  var num = 1
  var char = newStr.slice(0,1)
  console.log('newStr', newStr)
  var reg = /(\w)\1+/g
  newStr.replace(reg, ($0,$1)=>{
    if($0.length > num) {
      num = $0.length
      char = $1
    }
  })
  return {
    num,
    char
  }
}
console.log(getMaxOne("adfasdfadsfsa111qwqer222223r"));
