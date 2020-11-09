// 解题思路： i，j双指针，j找到和大于s的项数，保存最小的j-i+1,然后i往后挪一个，找出其他的解
const minSubArrayLen = (s, nums) => {
  let minLen = Infinity
  let i = 0, j = 0, sum = 0
  while(j  < nums.length) {
    sum += nums[j]
    while(sum >= s) {
      minLen = Math.min(minLen, j - i + 1)
      sum -= nums[i]
      i++
    }
    j++
  }
  return minLen === Infinity ? 0 : minLen
}