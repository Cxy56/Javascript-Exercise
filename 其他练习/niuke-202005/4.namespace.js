// !!牛客case不通过
function namespace(oNamespace, sPackage) {
  function fn(oNamespace, sPackage) {
      var list = sPackage.split('.');
      if (list[0] === '') {
          return;
      }
      if (oNamespace[list[0]] instanceof Object) {
          namespace(oNamespace[list[0]], list.slice(1).join('.'));
      } else {
          oNamespace[list[0]] = {};
          namespace(oNamespace[list[0]], list.slice(1).join('.'));
      }
  };
  fn(oNamespace, sPackage);
  // console.log('pointer', pointer)
  // console.log('oNamespace===', oNamespace)
  return oNamespace;
}

console.time('namespace:')
let res = namespace({a: {test: 1, b: 2}}, 'a.b.c.d')
console.log('res', res)
console.timeEnd('namespace:')

// !!牛客case不通过
function namedPackage(oName,sPackage){
  let sPackageArr = sPackage.split('.')
  // console.log('sPackageArr', sPackageArr)
  function _namedPackage(oName,sPackageArr) {
    if(sPackageArr.length <= 0) return
    let arr0 = sPackageArr[0]
    sPackageArr.shift()
    if(oName[arr0] instanceof Object) {
    } else {
      oName[arr0] = {}
    }
    _namedPackage(oName[arr0], sPackageArr)
  }
  _namedPackage(oName,sPackageArr)
  return oName
}

console.time('namedPackage:')
let res2 = namedPackage({a: {test: 1, b: 2}}, 'a.b.c.d')

console.log('res2', res2)
console.timeEnd('namedPackage:')

// 题目描述
// 根据包名，在指定空间中创建对象
// 输入描述:
// namespace({a: {test: 1, b: 2}}, 'a.b.c.d')
// 输出描述:
// {a: {test: 1, b: {c: {d: {}}}}}

function namespace2(oNamespace, sPackage) {
    var arr = sPackage.split('.');
    var res = oNamespace;   // 保留对原始对象的引用
 
    for(var i = 0, len = arr.length; i < len; i++) {
        if(arr[i] in oNamespace) {  // 空间名在对象中
            if(typeof oNamespace[arr[i]] !== "object") {    // 为原始值
                oNamespace[arr[i]] = {};    // 将此属性设为空对象           
            }  
        } else {    // 空间名不在对象中，建立此空间名属性，赋值为空
            oNamespace[arr[i]] = {};
        }
         
        oNamespace = oNamespace[arr[i]];    // 将指针指向下一个空间名属性。
    }
 
    return res;
 
}

console.time('namespace2:')
let res3 = namespace2({a: {test: 1, b: 2}}, 'a.b.c.d')

console.log('res3', res3)
console.timeEnd('namespace2:')