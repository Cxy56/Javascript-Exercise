// 两数之和
// 给定一个整数数组 nums 和一个目标值 target ，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
function findIndex(arr, target) {
  let res = []
  for(let i = 0; i < arr.length; i++) {
    let cur = arr[i]
    let result = target - cur
    if(res[cur] === undefined) {
      // 利用数组下标，把计算结果保存
      res[result] = i
    } else {
      return [res[cur], i]
    }
  }
  return []
}

// 返回数组元素组合
let res = findIndex([2, 7, 11, 15], 9)
console.log(res)

function findIndex2(arr, target) {
  let res = []
  for(let i = 0; i < arr.length; i++) {
    let cur = arr[i]
    let result = target - cur
    if(res[cur] === undefined) {
      // 利用数组下标，把计算结果保存
      res[result] = cur
    } else {
      return [res[cur], cur]
    }
  }
  return []
}

let res2 = findIndex2([2, 7, 11, 15], 9)
console.log(res2)

// 切分数组，利用数组的findIndex
function getSumIndex(arr1, sum) {
  let i = 0;
  while (i < arr1.length) {
    const j = arr1.slice(i + 1).findIndex(item => arr1[i] + item === sum);
    if (j !== -1) {
      console.log([i, i + 1 + j]);
      return [i, i + 1 + j];
    } else {
      i++;
    }
  }
  console.log("[]");
  return [];
}
let nums = [2, 7, 11, 15],target = 26;

getSumIndex(nums, target);

// !!map存储
var twoSum = function(nums, target) {
  let map = new Map()
  for(let i = 0; i< nums.length; i++) {
      let k = target-nums[i]
      if(map.has(k)) {
          return [map.get(k), i]
      }
      map.set(nums[i], i)
  }
  return [];
};
console.log(twoSum(nums, target));

// !! 有序数组, 找出两数之和的下标
var twoSum = function(numbers, target) {
  let low = 0;
  let high = numbers.length - 1;

  while (low < high) {
      let sum = numbers[low] + numbers[high];
      if (sum === target) {
          return [low + 1, high + 1]
      } else if (sum < target) {
          low++;
      } else {
          high--;
      }
  }
  return [-1, -1];
};

// !!三数之和
// 解题思路，  最接近的三数之和
// 给一个目标值，找三个数，使他们之和最接近目标值
// 先将数组从小到大排序，从左到右先固定一个数，头尾双指针进行扫描
// 如果 sum 大于 target，就左移右指针，否则右移左指针
const threeSumClosest = (nums, target) => {
  nums.sort((a, b) => a - b)
  let res = nums[0] + nums[1] + nums[nums.length - 1]
  for (let i = 0; i < nums.length - 2; i++) {
    const n1 = nums[i]
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      const n2 = nums[left]
      const n3 = nums[right]
      const sum = n1 + n2 + n3
      sum > target ? right-- : left++
      if (Math.abs(sum - target) < Math.abs(res - target)) {
        res = sum
      }
    }
  }
  return res
}

// !!三数之和等于0
var threeSum = function(nums) {
  if(!nums || nums.length < 3) return []
  let result = [], second, last
  // !!排序
  nums.sort((a, b) => a - b) 
  for (let i = 0; i < nums.length ; i++) {
    if(nums[i] > 0) break
    // 去重
    if(i > 0 && nums[i] === nums[i-1]) continue
    second = i + 1
    last = nums.length - 1
    while(second < last){
      const sum = nums[i] + nums[second] + nums[last]
      if(!sum){
        // sum 为 0
        result.push([nums[i], nums[second], nums[last]])
        // 去重
        while (second<last && nums[second] === nums[second+1]) second++ 
        while (second<last && nums[last] === nums[last-1]) last--
        second ++
        last --
      }
      else if (sum < 0) second ++
      else if (sum > 0) last --
    }
  }
  console.log('result', result)        
  return result
};