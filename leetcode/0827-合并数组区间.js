// 给出一个区间的集合，请合并所有重叠的区间。
// 输入: [[1,3],[2,6],[8,10],[15,18]]
// 输出: [[1,6],[8,10],[15,18]]
// 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

function merge(arr) {
  arr.sort((a, b) => a[0] - b [0])
  for(let i = 0 ; i < arr.length - 1; i++) {
    let a2 = arr[i][1]
    let b1 = arr[i+1][0]
    let b2 = arr[i+1][1]
    if(a2 >= b1) {
      arr[i][1] = a2 >= b2 ? a2 : b2
      arr.splice(i+1, 1)
      i--
    }
  }
  console.log('arr', arr)
  return arr
}
let arr = [[1,3],[2,6],[8,10],[15,18]]
merge(arr)

//方法二

var merge2 = function(intervals) {
  var len = intervals.length
  if(!len) return []
  intervals.sort((a, b) => a[0] - b[0])
  let first = intervals[0]
  let res = []
  for(let item of intervals) {
    if(first[1] < item[0]) {
      res.push(first)
      first = item
    } else {
      first[1] = Math.max(first[1], item[1])
    }
  }
  if(first.length) {
    res.push(first)
  }
  console.log('res', res)
  return res
}
let arr2 = [[1,5],[2,6],[5,10],[15,18]]
merge2(arr2)