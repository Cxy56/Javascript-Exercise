// 移动数组中0 元素到末尾，并保持原来的元素顺序,在原数组上操作
// 输入：[0,1,3,0,12,13]
// 输出：[1,3,12,13,0,0]

function moveItems(nums) {
  let j = 0
  for(let i = 0; i < nums.length; i++) {
    if(nums[i]!== 0) {
      nums[j] = nums[i]
      if(i !== j) {
        nums[i] = 0
      }
      j++
    }
  }
  console.log('nums', nums)
}
moveItems([0,1,3,0,12,13])

