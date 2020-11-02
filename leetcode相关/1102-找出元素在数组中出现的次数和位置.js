// !! 1. 给定一个********排序数组************和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
// 你可以假设数组中无重复元素。
// !! 方法1: 比较前后两个元素和 target 的大小
var searchInsert = function(nums, target) {
  if(target <= nums[0]) return 0
  for(let i = 0; i < nums.length; i++) {
      if(target === nums[i]) return i
      if(target > nums[i]) {
        // 最后一个元素，或者大于当前元素，小于后面一个元素，返回 i+1
        if(i === nums.length - 1 || target < nums[i+1]) {
            return i + 1
        }
      }
  }
  return nums.length
}

// !!方法2: 采用二分查找
var searchInsert2 = function(nums, target) {
  let left = 0
  let right = nums.length // 范围[lift,right)
  while(left < right) {
    let mid = Math.floor((left + right) / 2)
    if(nums[mid] < target) {
        left = mid + 1
      } else {
        right = mid
      }
  }
  return left
}


// ****************
// !! 查找数字在****有序数组****中出现的次数
var search = function(nums, target) {
  let len = nums.length, left = 0, right = len - 1,count = 0
  while(left < right) {
      let mid = (left + right) >> 1
      if(nums[mid] === target) {
          left = mid
          break
      } else if(nums[mid] > target)  {
          right = mid - 1
      } else {
          left = mid + 1
      }
  }
  // 找到left位置，往左看下
  let start = left - 1
  while(nums[start] === target && start >=0) {
      count++
      start--
  }
  // 找到left位置，往右找
  while(nums[left] === target && left < len) {
      count++
      left++
  }
  return count
};