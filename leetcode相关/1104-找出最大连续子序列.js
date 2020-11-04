//!!腾讯面试题。给定一个数组，找最大升序子序列元素个数
// 找出连续升序的个数
function findMax(arr) {
  let max = 0, count = 1
  for(let i = 0; i < arr.length; i++) {
    j = i
    while(j < arr.length) {
      if(arr[j] >= arr[j-1] || j === 0) {
        count++
        j++
      } else {
        max = Math.max(max, count)
        count = 1
        break
      }
    }

  }
}

findMax([5, 2, 4, 6, 7,8,10, 6])

// 找出不连续最大升序的个数********  动态规划
function findUnMax(arr) {
  let len = arr.length
  if (len === 0) return 0
  let temp = new Array(len)
  let max = 1
  for(let i = 0; i < len; i++) {
    if(i === 0){
      temp[i] = 1
    } else {
      let cur = i
      let curItem = 0
      while(cur >= 0) {
        if (arr[cur] < arr[i]) {       
          curItem = Math.max(curItem, temp[cur])
          console.log('curItem', curItem)
        }
        cur--
      }
      temp[i] = curItem + 1
      max = Math.max(max, temp[i])
    }
  }
  console.log('temp', temp)
  console.log('max', max)

}
const arr = [101,19,12,51,32,7,103,8]
findUnMax(arr)