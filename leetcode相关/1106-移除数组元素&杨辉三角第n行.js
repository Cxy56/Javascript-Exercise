// 移除元素
// 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
var removeElement = function(nums, val) {
  let i = 0, j = 0
  while(i < nums.length) {
    if(nums[i] !== val) {
      if(i !== j) {
        nums[j] = nums[i]
        nums[i] = val
      }
      j++
    }
    i++
  }
  console.log(nums)
  console.log('j', j)
}

removeElement([3,2,2,3], 3)

/**
 * 杨辉三角的第n行数据
 * @param {number} numRows
 * @return {number[][]}
 */

 var generate = function (numRows) {
   let res = []
   for(let i = 0; i < numRows; i++) {
     if(i === 0 ){
       res[0] = [1]
       continue
     }
     let row = []
     for(let j = 0 ; j < i + 1; j++) {
       if(j === 0 || j === i) {
         row[j] = 1
       } else {
        row[j] = res[i - 1][j - 1] + res[i - 1][j]
       }
     }
     res.push(row)
   }
   console.log('res', res)
   return res
 }

 generate(2)
 generate(3)
 generate(4)
 generate(5)