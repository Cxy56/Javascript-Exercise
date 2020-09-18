var missingNumber = function(nums) {
  let len = nums.length
  if(len === 1) return nums[0] === 0 ? 1 : 0
  let i = 0 
  if(nums[i] !== 0) return 0
    for(i = 0; i < len -1; i++){
      if(nums[i] + 1 !== nums[i+1]) {
          return nums[i] + 1
      }
    }

  return nums[len - 1] + 1
};

console.log(missingNumber([0,1,2,3,4,5,6,7,8])) // 9
console.log(missingNumber([1])) // 0
console.log(missingNumber([0])) // 1