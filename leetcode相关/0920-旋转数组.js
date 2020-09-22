// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

function rotateArr(nums, k) {
  let len = nums.length
  let steps = k % len
  let result = nums.slice(-steps).concat(nums.slice(0, len-steps))
  console.log('result', result)
  return result
}

var arr = [-1, -100, 3, 99];
var k = 5;
rotateArr(arr, k)