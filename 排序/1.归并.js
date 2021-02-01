// !!真正能投入实际使用的排序方法
//!!TODO 原理：归并排序采用分治--递归的思想，先对一个数组进行不断的对半拆解，直至子项个数为1。
function merge(left, right) {
  var result = [];
  console.log('left', left)
  console.log('right', right)
  while(left.length > 0 && right.length > 0) {
    if(left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  // 当左右数组长度不等.将比较完后剩下的数组项链接起来即可
  console.log(result)
  return result.concat(left).concat(right);
}

function mergeSort(array) {
  if(array.length == 1) return array;
  // 对半划分
  var mid = Math.floor(array.length / 2);
  var left = array.slice(0, mid);
  var right = array.slice(mid);
  // 递归合并
  return merge(mergeSort(left), mergeSort(right));
}

let arr = [3,12,5,4,12,44,3]
let res = mergeSort(arr)

console.log('mergeSort', res)