// 编写一个函数计算多个数组的交集
// 1. 题目
// 要求：输出结果中的每个元素一定是唯一的
// !!使用 reducer 函数

function interSect(...args) {
  if (args.length === 0) {
    return []
  }
  if (args.length === 1) {
    return args[0]
  }

  return [...new Set(args.reduce((result,arg)=> {
    return result.filter(item => arg.includes(item))
  }))]
}
let arr1 = [1,2,3], arr2 = [2,3,4], arr3 = [3,4,5]
let res = interSect(arr1, arr2, arr3)
console.log('interSect', res)

// !!两个数组的交集， 利用对象存起来
function interSect2(arr1, arr2) {
  let objMap = {}
  let res = []
  // 先去重
  let array1 = [...new Set(arr1)]
  let array2 = [...new Set(arr2)]
  array1.forEach(element => {
    if(objMap[element] === undefined) {
      objMap[element] = 1
    } else {
      objMap[element]++
    }   
  });
  array2.forEach(element => {
    if(objMap[element] === undefined) {
      objMap[element] = 1
    } else {
      objMap[element]++
    }   
  });
  console.log('objMap', objMap)
  for(let key in objMap) {
    if(objMap[key] > 1) {
      res.push(+key)
    }
  }
  console.log('res', res)
}

interSect2([1,2,3], [1,2,4,2])

// 输入: nums1 = [1,2,2,1], nums2 = [2,2]
// 输出: [2,2]

var intersect3 = function(nums1, nums2) {
  let hash = {}
  nums1.map(item => {
    if(!hash[item]) {
      hash[item] = 1
    }else {
      hash[item]++
      // 统计item的个数
    }
  })
  console.log(hash)
  let res = []
  nums2.map(item => {
    if(hash[item] > 0) {
      res.push(item)
      hash[item]--
      // 重合一个就减去一个
    }
  })
  console.log(res)
  return res
};

let nums11 = [1,2,2,1], nums12 = [2,2]

intersect3(nums11, nums12)

// !! 遍历其中一个数组，然后在另一个数组中找到该元素后，res中push进去，然后删除该元素
var intersect4 = function(nums1, nums2) {

  let res = []
  let a1 = [...nums1]
  let a2 = [...nums2]
  for(let i = 0; i < a1.length; i++) {
    let index = a2.indexOf(a1[i])
    if(index > -1) {
        console.log('includes', a2[i])
        res.push(a1[i])
        a2.splice(index,1)
    }
  }
  console.log('intersect4', res)
  return res

};

intersect4(nums11, nums12)