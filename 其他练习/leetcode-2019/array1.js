// 数组去重，两层循环，遇到两个数组元素相等，index往后移，i和j先后相邻开始循环
function toUnquie (arr) {
  var res = []
  for (let i = 0, len = arr.length; i < len; i++) {
    for (let j = i+1; j < len; j++) {
      if (arr[i] === arr[j]) {
        j = ++i;
      }
    }
    // console.log('i', i)
    res.push(arr[i])
  }
  // console.log(`res`, res)
}
toUnquie([1,2,3,'4', 5, '1', 1, 4, 1])

// !! 第1题
// 2019.12.11第一题，找出一个数组中，和等于两个数的下标（或者值，可以把i替换成arr[i]）
function toSum (arr,target) {
  var res = []
  for (let i = 0, len = arr.length; i < len; i++) {
    let temp = target - arr[i]
    if (res[temp]!== undefined) return [res[temp], i]
    res[arr[i]] = i
  }
}
// var two = toSum([2,11,7,16],9)
// console.log(`two`, two)

// !! 第2题
// 找出页面的不重复元素个数
function removeDuplicate (arr) {
  var ans = 0
  
  for (let i = arr.length; i--;) {
    console.log(`i`, i)
    console.log(`arr.length-`, arr.length)
    if (arr[i] === arr[i+1]){
      console.log(`arr[i]`, arr[i])
      arr.splice(i,1)
      continue;
    }
    else ans++;
  }
  console.log(`result`, arr)
  return ans
}

// var number = removeDuplicate([1,2,3,3,4,5,5,5])
// console.log(`number`, number)

// !! 第3题
// 原地算法，删除数组nums中等于val的值，并返回新的数组
function removeEqualElement (nums, target) {
  var total = 0;
  for(let i = 0; i < nums.length; i++) {
    if (nums[i] !== target) {
      total++
    } else {
      nums.splice(i,1)
    }
  }
  return total
}

// !! 第4题
// 找出
// !!有序
// 数组中与target相同的数组元素下标
function toTargetIndex (arr, target) {
  let len = arr.length
  arr[-1] = -Number.MAX_VALUE
  arr[len] = Number.MAX_VALUE
  for (let i = 0; i <= len; i++) {
    if (arr[i-1] < target && target <= arr[i]) {
      return i
    }
  }
}
// console.log(toTargetIndex([1,3,5,6],0))

function toTargetIndex2 (arr, target) {
  var hash = []
  let len = arr.length
  arr[-1] = -Number.MAX_VALUE
  arr[len] = Number.MAX_VALUE
  for (let i = 0; i <= len; i++) {
    hash[arr[i]] = i
  }
  if (hash[target] !== undefined) {
    return hash[target]
  }
  for (let i = 0; i <= len; i++) {
    if (arr[i-1] < target && target < arr[i]) {
      return i
    }
  }
}
console.log(toTargetIndex2([1,3,5,5,6],8))

// !! 第5题
// 找出和最大的连续子数组，返回和
// 
function findMaxSubArray (nums) {
  var maxn = nums[0]
  var sum = 0
  nums.forEach((item,index,array) => {
    sum += item;
    console.log(`sum----`, sum)
    if (sum > maxn) {
      console.log(`sum`, sum)
      maxn = sum
    }
    if (sum < 0) sum = 0  
  });
  return maxn
}
// let result5 = findMaxSubArray([-2,1,-3,4,-1,2,1,-5,4])
// console.log(`result5`, result5)


// !! 第6题
// 
// 
function sumArray (nums) {
  var len = nums.length
  ++nums[len-1]
  console.log(`nums`, nums)
  var sum = 0
  nums.forEach((item,index) => {
    sum += item * Math.pow(10, len -index-1)
  });
  return sum
}
// console.log(`sumArray`, sumArray([5,2,49,5]))

// !! 第7题
// 两个有序整数数组nums1和nums2，nums2合并到nums1,并且nums1仍然是有序数组
//   2020-05k可以用归并算法的合并有序数组方法啊
function mergeTwoArray (nums1, nums2) {
  let length1 = nums1.length
  let length2 = nums2.length
  for (let i = length2-1; i >= 0; i--) {
    let index = length1
    for (let j = length1 -1; j >= 0; j--) {
      if (nums2[i] <= nums1[j]) {
        index = j    
      }
      console.log(`index`, index)
    }
    nums1.splice(index, 0, nums2[i])
  }
  console.log(`nums1`, nums1)
}
let nums11 = [1,3,4,7,9]
let nums22 = [0,3,6]
// console.log(`mergeTwoArray`, mergeTwoArray(nums11,nums22))
// 循环次数较多，可以先用数组存起来,可是还要循环数组啊。。


function mergeTwoArray2 (nums1, nums2) {
  Array.prototype.push.apply(nums1,nums2)
  nums1.sort((a,b) => a-b)
  return nums1
}
let nums1 = [1,3,4,7,9]
let nums2 = [0,3,6]
// console.log(`mergeTwoArray2`, mergeTwoArray2(nums1,nums2))

// !! 第8题，杨辉三角
/* 杨辉三角
输入 5
输出[
  [1],
  [1,1],
  [1,2,1],
  [1,3,3,1],
  [1,4,6,4,1]
]
*/
function yhuiAngular(rowNums) {
  var ans = []
  for(var i = 0; i < rowNums;i++) {
    if (i === 0) {
      ans[i] = [1]
      continue
    }
    ans[i] = []
    for(j=0;j<=i;j++) {
      if (j===0) ans[i][j] = ans[i-1][j]
      else if (j===i) ans[i][j] = ans[i-1][j-1]
      else ans[i][j] = ans[i-1][j-1] + ans[i-1][j]
    }
  }
  return ans
}
// console.log(`yhuiAngular`, yhuiAngular(6))

// !! 第9题，卖股票，求赚取的最大差值
function maxNum(arr) {
  var ans = 0;
  var len = arr.length;
  var minn = Infinity;
  for(var i=0;i<len;i++) {
    minn = Math.min(minn, arr[i])
    console.log(`minn`, minn)
    ans = Math.max(ans, arr[i]-minn)
  }
  return ans
}
console.log(`maxNum`, maxNum([7,1,5,3,6,4]))
console.log(`maxNum`, maxNum([7,2,3,1,6]))

// !! 第10题，卖股票，一次只能买卖一支，最大的利润
function maxProfits(arr) {
  var sum = 0;
  var len = arr.length;
  var begin;
  for(var i=0;i<len;i++) {
    if (i === 0 ) {
      begin = arr[i]
      continue
    }
    if(arr[i] >= arr[i-1]){
      if (i === len -1) {
        // 数组递增的情况，到最后一个元素时计算sum
        sum +=(arr[i]-begin)
      }
      continue
    }
    sum +=(arr[i-1]-begin)
    begin = arr[i]
  }
  return sum
}
let price = [7,1,5,3,4,6]
// let price = [6,5,4,3,2,1]
// let price = [1,2,3,4,5,6]
console.log(maxProfits(price))