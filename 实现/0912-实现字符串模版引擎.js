let template = '我是{{ name }}，年龄{{ age }}，性别{{   sex}}';
let data = {
  name: '姓名',
  age: 18
}

let res = render(template, data)
console.log(res)
function render(template, data) {
  let reg = /\{\{\s*(\w+)\s*\}\}/
  if(!reg.test(template)) return template
  let name = reg.exec(template)[1]
  template = template.replace(reg, data[name])
  return render(template, data)
}