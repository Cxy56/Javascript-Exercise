// 二分查找算法
function helfSearch(arr, target) {
  let len = arr.length
  let middle = ~~(arr.length / 2)
  let midNum = arr[middle]
  if(len === 0) return null
  else if(midNum === target) return middle
  else if(midNum < target) return helfSearch(arr.slice(middle), target)
  else return helfSearch(arr.slice(0, middle), target)
}
console.log("我是二分算法" + helfSearch([1, 2, 3, 4, 5, 6, 7, 8], 5));
