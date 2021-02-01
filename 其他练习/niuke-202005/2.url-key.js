// 获取 url 中的参数
// 1. 指定参数名称，返回该参数的值 或者 空字符串
// 2. 不指定参数名称，返回全部的参数对象 或者 {}
// 3. 如果存在多个同名参数，则返回数组


// !!牛客case不通过, case通过率为50.00%
function getUrlParam(sUrl, sKey) {
  if(sUrl.indexOf('?') === -1) {
    return {}
  }
  let query = sUrl.split('?')[1]
  if(!query) return {}
  let arr = query.split('&')
  let obj = {};
  console.log('arr', arr)
  arr.forEach(element => {
    let elementArr = element.split('=')
    var key = elementArr[0]
    var value = elementArr[1]

    if(obj[key]) {
      typeof obj[key] === 'object' ? obj[key].push(value) : obj[key] = [obj[key], value]
    } else {
      obj[key] = value
    }
  });
  console.log('obj', obj)
  if(sKey === undefined) return obj
  let res = {}
  for(let key in obj){
    if(key === sKey) {
      res = obj[key]
    }
  } 
  return res   
}

let url = 'http://www.nowcoder.com?key=1&key=2&key=3&test=h4#haha'
let name = 'key'
console.log(getUrlParam(url,'tes'))

// var search = url.split('?')[1];
// let res = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
// console.log('res',res)

// !!正则表达式
const queryString = (str)=>{
  const obj = {}
  str.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => (obj[k] = v))
  return obj
}
console.log('queryString', queryString(url))
