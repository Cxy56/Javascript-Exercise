function rgbToColor(regStr){
  var regExp = /^rgb\((\d{0,3})\s*,\s*(\d{0,3})\s*,\s*(\d{0,3})\s*\)$/
  // var ret=sRGB.match(regexp);
  // for(var i=1;i<=3;i++){}
  return regStr.replace(regExp,function(p, p1,p2,p3){
    if(+p1 <= 255 && +p2 <= 255 && +p3 <= 255) {
      return '#' + to16(p1) + to16(p2) + to16(p3)
    } else {
      return regStr
    }
  })
}
function to16(num) {
  if((+num) <= 16) {
    return '0' + (+num).toString(16)
  } else if((+num) <= 255) {
    return (+num).toString(16)
  }
}
let res = rgbToColor('rgb(15, 15, 255)')

console.log('res', res)

// 链接：https://www.nowcoder.com/questionTerminal/80b08802a833419f9c4ccc6e042c1cca?f=discussion
// 来源：牛客网

function rgb2hex(sRGB) {
    var regexp = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
    var ret = sRGB.match(regexp);
    if(!ret){
        return sRGB;
    } else {
        var str='#';
        for(var i = 1;i <= 3;i++){
            var m = parseInt(ret[i]);
            if(m <= 255 && m>= 0 ){
              str += (m < 16 ? '0' + m.toString(16) : m.toString(16));
            } else {
              return sRGB;
            }
        }
        return str;
    }
}

let res2 = rgb2hex('rgb(15, 15, 255)')

console.log('res', res2)