
// 从扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。
// 2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
  let total = 0
  let has = 0
  nums.sort((a,b) => a - b)
  for(let i = 0; i < nums.length; i++) {
      if(nums[i] === 0) {
         total++ 
      } else if(nums[i + 1] - nums[i] > 1){
          has += nums[i + 1] - nums[i] - 1
      } else if(nums[i + 1] === nums[i]){
          return false
      }
  }
  let res = total >= has ? true : false
  console.log(res)
  return res

};

isStraight([0,0,1,2,5])