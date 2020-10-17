// 编程题，请写一个函数，完成以下功能
// 输入 '1, 2, 3, 5, 7, 8, 10' 输出 '1~3, 5, 7~8, 10'

function changeArr(nums) {
  let res = []
  let temp = nums[0]
  for(let i = 0; i < nums.length; i++) {
    let cur = nums[i]
    if(cur + 1 !== nums[i+1]) {
      if(cur !== temp) {
        res.push(`${temp}~${cur}`)
      } else {
        res.push(temp)
      }
      temp = nums[i+1]
    }
  }
  console.log(res)
  return res
}
let nums = [1, 2, 3, 5, 7, 8, 10, 11, 17]

changeArr(nums)