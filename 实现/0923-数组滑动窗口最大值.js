var maxSlidingWindow = function(nums, k) {
  let res = [], len = nums.length
  if(len === 0 ) return []
  let totalEnd = len - k  > 0 ? len - k : 0
  for(let i = 0; i <= totalEnd; i++){
    let curArr = nums.slice(i, i + k)
    let max = Math.max(...curArr)
    res.push(max)
  }
  console.log(res)
  return res
};

let nums = [1,3,-1,-3,5,3,6,7], k = 3
maxSlidingWindow(nums, k)
maxSlidingWindow([1,2], 3)
maxSlidingWindow([], 3)

function maxSlidingWindow2 (arr, k) {
  let res = [], len = arr.length
  if(len === 0 ) return []
  let end = len - k > 0 ? len-k : 0
  for(let i = 0 ; i <= end; i++) {
    for(let j = i ; j < i + k; j ++) {}
  }

}
