// 题目描述
// css 中经常有类似 background-image 这种通过 - 连接的字符，通过 javascript 设置样式的时候需要将这种样式转换成 backgroundImage 驼峰格式，请完成此转换功能
// 1. 以 - 为分隔符，将第二个起的非空单词首字母转为大写
// 2. -webkit-border-image 转换后的结果为 webkitBorderImage

function cssStyle2DomStyle(sName) {
  var strArr = sName.split('-')
  if(!strArr[0]) {
    strArr.shift()
  }
  if(strArr.length > 1) {
    for(let i = 1; i < strArr.length; i++){
      let firstCode = strArr[i].slice(0,1).toUpperCase()
      strArr[i] = firstCode + strArr[i].slice(1)
    }
  }
  return strArr.join('')
}

let res1 = cssStyle2DomStyle('-webkit-border-image')
console.log('res1', res1)
let res2 = cssStyle2DomStyle('background-image')
console.log('res2', res2)
let res3 = cssStyle2DomStyle('background')

console.log('res2', res3)