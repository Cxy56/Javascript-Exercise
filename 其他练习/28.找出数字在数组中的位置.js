/*
 * @Description: 
 * @Author: xychen21
 * @Date: 2020-07-17 11:58:07
 * @LastEditTime: 2020-07-17 18:23:46
 * @LastEditors:  
 */
// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
// 你可以假设数组中无重复元素。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
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
};

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
  return left;
}
console.log(searchInsert2([5,7,7,8,8,10], 6))
// console.log(find([1,3,5,6], 4))



/*
  二分查找
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let len = nums.length, left = -1, right = len - 1
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
  if(nums[left] !== target) {
    return [-1,-1]
  }
  let start = left - 1
  while(nums[start] === target && start >=0) {
      start--
  }
  console.log('start', start)
  // 找到left位置，往右找
  while(nums[left] === target && left < len) {
      left++
  }
  console.log('end', left)
  return [start + 1, left - 1]
};

// console.log(searchInsert2([5,7,7,8,8,10], 6))
console.log(search([8,8,8,8,8], 8))


var searchRange = function(nums, target) {
  let left = 0, right = nums.length -1
  let start = -1, end = -1
  while(left <= right) {
      if(nums[left] < target) left++
      // 找到第一个出现的位置，赋值给start
      if(nums[left] === target && start === -1) start = left++
      if(nums[right] > target) right--
      // 找到最后一个出现的位置，赋值给end
      if(nums[right] === target && end === -1) end = right--
      if(start > -1 && end > -1) break
  }
  return [start, end]
};
searchRange([8,8], 8)