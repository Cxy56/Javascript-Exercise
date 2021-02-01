// ****************选择
function selectArr(arr) {
  for(let i = 0 ; i < arr.length; i++) {
    let min = i
    for(j = i + 1; j < arr.length;j++) {
      // 与最小的元素比较，每次循环找到最小的元素
      if(arr[min] > arr[j]) {
        min = j
      }
    }
    if(min !== i) {
      let temp = arr[min]
      arr[min] = arr[i]
      arr[i] = temp
    }
  }
  console.log('selectArr', arr)
}

selectArr([1,5,7,2,0,8,6])

// **************** 冒泡
 // !! 冒泡           
 // !! 解析：1.比较相邻的两个元素，如果前一个比后一个大，则交换位置。
 // !!      2.第一轮的时候最后一个元素应该是最大的一个。

 function bubbleSort (arr) {
   let len = arr.length
   for(let i = 0; i < len - 1; i++) {
     for(j = 0; j < len - i - 1; j++) {
       if (arr[j] > arr[j+1]) {
         let temp = arr[j]
         arr[j] = arr[j+1]
         arr[j+1] = temp
       }
     }
   }
   console.log('bubbleSort===========', arr)
 }
 bubbleSort([1,5,7,2,0,8,6])
// ****************插入
function insertSort(arr) {
  for(i = 0; i < arr.length; i++) {
    let element = arr[i]
    for(j = i -1; j >=0; j--) {
      if(arr[j] > element) {
        arr[j+1] = arr[j]
      } else {
        // 前面都已经是有序的
        break
      }
    }
    arr[j + 1] = element
  }
  console.log('insertSort', arr)
}
insertSort([1,5,7,2,0,8,6])

// ****************快排
function quickSort(arr) {
  if(arr.length <= 1) return arr
  let midIndex = Math.floor(arr.length / 2)
  let midItem = arr.splice(midIndex, 1)[0]
  let left = [], right = []
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < midItem) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([midItem]).concat(quickSort(right))
}
console.log('quickSort', quickSort([1,5,7,2,0,8,6]))

// ****************归并

 function mergeSort(arr){
  if(arr.length <= 1) return arr
  let midIndex = Math.floor(arr.length / 2)
  let left = arr.slice(0, midIndex)
  let right = arr.slice(midIndex)

  return mergeArr(mergeSort(left), mergeSort(right))
 }
 function mergeArr(left, right) {
   let res = []
   while(left.length > 0 && right.length > 0) {
     if(left[0] < right[0]) {
       res.push(left.shift())
     } else {
       res.push(right.shift())
     }
   }
   return res.concat(left).concat(right)
 }
 
 console.log('mergeSort', mergeSort([1,5,7,2,0,8,6]))