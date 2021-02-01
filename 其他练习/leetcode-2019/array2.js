
// !! leetcode

// !! 第11题
// 一个按升序排列的数组，找出和等于某个值的两个数的下标，假定结果唯一
function toSum (arr,target) {
  var res = []
  for (let i = 0, len = arr.length; i < len; i++) {
    let temp = target - arr[i]
    if (res[temp]!== undefined) return [res[temp], i]
    res[arr[i]] = i
  }
}
// var two = toSum([2,3,7,11,16],9)
// console.log(`two`, two)

// !! 第12题
// 找出一个数组中的众数，长度为n,出现次数> n/2

function findElement (arr) {
  let hash = []
  let len = arr.length
  let res
  arr.forEach((item,index) => {
    if (!hash[item]) {
      hash[item] = 1
    } else {
      hash[item]++
    }
    if (hash[item] > len / 2) {
      res = item
    }    
  })
  return res
}

// !! 第13题
// arr数组向右移动k位
function moveArr (arr, k) {
  let temp = arr.splice(-k)
  // method 1
  let result = Array.prototype.concat(temp,arr)
  console.log(`result`, result)
  // method 2
  Array.prototype.unshift.apply(arr, temp)
  console.log(`arr`, arr)
}

let arr = [-1,100,3,99]

moveArr(arr, 1)

// !! 第14题     判断一个数组是否存在重复元素

function isArrayDuplication(arr) {
  let hash = []
  let len = arr.length
  let isDup = false
  arr.forEach(item => {
  })
  for(let i = 0 ; i < len; i++) {
    let item = arr[i]
    if (!hash[item]) {
      hash[item] = 1
    } else {
      return true
    }
  }
  console.log(`isDup`, isDup)
  return isDup
}
// let testArr = [1,2,3,4]
// let res = isArrayDuplication(testArr)

// console.log(`res`, res)
// !! 第14题     给定一个数组。判断是否存在arr[i] === arr[j] 并且下标差小与k
function nearByEqual(arr, k) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]
    if (res[item] === undefined) {
      res[item] = i
    } else {
      console.log(`res[item]`, res[item])
      console.log(`i`, i)
      if (i - res[item] <= k) {
        return true
      }
      res[item] = i
    }
  }
  return false
}

// let testArr = [1,2,1,1,2,3]
// let res = nearByEqual(testArr, 2)

// console.log(`res`, res)

// !! 第15题     给定一个包含0，1，2...n的序列，找出没有出现在序列中的那个数

function findNums (arr) {
  let hash = []
  arr.forEach(item => {
    hash[item] = true
  })
  // console.log
  for(let i = 0 ; i <= arr.length; i++) {
    if (!hash[i]) return i
  }
}

// let testArr = [1,2,4,5,3,6,0]
// let res = findNums(testArr)

// console.log(`res`, res)

// !! 第16题   给定一个数组nums，将所有0移动到数组末尾，并保持非0元素的相对位置不变(在原数组上操作)
function moveZero (nums) {
  let len = nums.length
  for(let i =len-1; i--;) {
    if(!nums[i]) {
      nums.splice(i,1)
      nums.push(0)
    }
  }
  return nums
}

let testNums = [0,1,2,0,4,5,3,6,0]
let res = moveZero(testNums)

console.log(`res`, res)