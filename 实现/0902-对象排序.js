// 1.obj-sort

var objArr = [
  {a:1, b:2},
  {a:2}, 
  {a:4, b:2, c:5, d:7, e: 3 },
  {a:3, b:2, c:5},
  {a:4, b:2, c:5, d:7 },
  {a:5, b:3 }]

  // 对数组进行排序

  Object.prototype.objLen = function() {
    var len = 0
    for(let key in this) {
      if(this.hasOwnProperty(key)) {
        len++
      }
    }
    return len
  }

  function sortArr(objArr) {
    objArr.sort((a, b) => a.objLen() - b.objLen())
    console.log(objArr)
    return objArr
  }
  sortArr(objArr)