var maxSubArray = function(nums) {
  if(nums.length === 0) return -Infinity
  let sum = nums[0], max = nums[0]
  for(let i = 1; i < nums.length; i++) {
      if(sum > 0) {
        sum += nums[i]
      } else {
        sum = nums[i]
      }
      // 保存最大的和到max中
      max = Math.max(max, sum)
  }
  console.log(max)
  return max
};
let nums = [-2]
maxSubArray(nums)
maxSubArray([2, -3, 4, -5, 6, 1])
maxSubArray([5, -3, 6, -5, 6, 1])