var removeDuplicates = function(nums) {
  let left = 0, right = 0
  let len = nums.length
  nums.sort((a, b) => a - b)
  console.log('nums-----1', nums)
  while(right < len) {
      if(nums[left] !== nums[right]) {
          nums[++left] = nums[right]
      }
      right++
  }
  console.log('nums=========2', nums)
  return left + 1
};

var removeDuplicates2 = function(nums) {
  let sum = 0
  nums.sort((a, b) => a - b)
  for(let i = 0; i < nums.length; i++) {
      if(nums[i] !== nums[i+1]) {
          nums[sum++] = nums[i]
      }
  }
  console.log('removeDuplicates2=========2', nums)
  nums.length = sum
  console.log('removeDuplicates2=========res', nums)
  return sum
};

console.log(removeDuplicates([1,3,5,1,0,5,3]))
console.log(removeDuplicates2([1,3,5,1,0,5,3]))