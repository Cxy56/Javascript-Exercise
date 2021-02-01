/*
 * @Description: 
 * @Author: xychen21
 * @Date: 2020-07-16 10:40:32
 * @LastEditTime: 2020-07-16 10:47:25
 * @LastEditors:  
 */
 //!! 1. 查找是否存在指定的数
function find(nums, target) {
  let left = 0;
  let right = nums.length;  // 范围是 [left, right)

  while(left < right) {
    let mid = left + Math.floor((right-left)/2);

    if(nums[mid] < target) {
      left = mid+1;
    } else {
      right = mid;
    }
  }
  return left !== nums.length && nums[left] === target; // 如果元素存在并且重复，则left指向重复的第一个一个位置；如果不存在，则left返回的是可以插入的位置。
}

// !!2.查找第一个大于或等于 target 的位置：
function find(nums, target) {
  let left = 0;
  let right = nums.length;  // 范围是 [left, right)

  while(left < right) {
    let mid = left + Math.floor((right-left)/2);

    if(nums[mid] < target) {
      left = mid+1;
    } else {
      right = mid;
    }
  }
  return left;
}