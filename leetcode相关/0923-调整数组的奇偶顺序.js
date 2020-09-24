
// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。
// 双指针，前面的奇数和后面的偶数互换即可

var exchange = function(nums) {
  let i = 0 ,j = nums.length - 1
  while(i < j) {
    if(nums[i] % 2 !== 0 ) {
      i++
      continue
    }
    if(nums[j] % 2 === 0 ) {
      j--
      continue
    }
  [nums[i], nums[j]] = [nums[j], nums[i]]
  }
  console.log(nums)
};

let nums = [1,2,3,4,5]
exchange(nums)