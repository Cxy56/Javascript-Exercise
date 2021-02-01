// !! 第1题 判断两个字符串，s，t是否是异位词（字符及个数完全相等，位置不同而已）

function isArgument(s, t) {
  if(s.length !== t.length) return false
  var a = s.split('').sort()
  var b = t.split('').sort()
  console.log('a', a)
  console.log('b', b)
  return a.toString() === b.toString()
}

// let s = 'acar'
// let t = 'cara'
// let res = isArgument(s, t)
// console.log('isArgument', res)


// !! 第2题 找出两个数组中的交集
function findEqual(nums1, nums2) {
  let hash = []
  nums1.forEach(element => {
    hash[element] = 1 
  })
  nums2.forEach(element => {
    if (hash[element] !== undefined) {
      ++hash[element]
    }
  })
  console.log(`hash`, hash)
  let ans = []
  for(let k in hash) {
    console.log(`k`, k)
    console.log(`hash`,hash[k])
    if (hash[k] >= 2) {
      ans.push(k)
    }
  }
  console.log(`ans`, ans)
}

// let nums1 = [1,2,2,1,3,1]
// let nums2 = [2,3,1,5]

// findEqual(nums1, nums2)


// !! 第3题 找出两个数组中的交集  例：[1,2,2,1] 和 [2，2]返回 [2，2]
function findEqual2(nums1, nums2) {
  let hash = []
  nums1.forEach(element => {
    hash[element] = 1 
  })
  let ans = []
  nums2.forEach(element => {
    if (hash[element] !== undefined) {
      ans.push(element)
    }
  })
  console.log(`hash`, hash)
  console.log(`ans`, ans)
}

let nums1 = [1,2,2,1,3,1]
let nums2 = [2,2]

findEqual2(nums1, nums2)

// !! 第4题 给出一个区间的集合，合并所有重叠的区间
// 输入 [[1,3],[2,6],[8,10],[15,18]]
// 输出[[1,6],[8,10],[15,18]]  因为[1,3],[2,6]重合，它们被合并成[1,6]
