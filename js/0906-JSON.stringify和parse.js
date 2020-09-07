function jsonStringify(obj) {
  let type = typeof obj
  if(type !== 'object') {
    if(type === 'function') {
      return
    }
    return String(obj)
  } else {
    let isArr = Array.isArray(obj)
    let arrJson = []
    for(let key of obj) {
      let value = obj[key]
      let type = typeof value
      if(type !== 'object') {
        if(type === 'function') {
          value = null
        } else {
          value = String(value)
        }
      } else {
        value = jsonStringify(value)
      }
      arrJson.push(isArr ? value : (key + ':') + value)
    }
    let res = (isArr ? '[' : '{' ) + String(arrJson) + (isArr ? ']' : '}' ) 
    return res
  }
}

// !! 实现JSON.parse
function myParse(str){
  return (new Function('return'+str))()
}