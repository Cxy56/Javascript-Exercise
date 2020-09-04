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
//先找最小的
function bubleArr(arr) {
  for(let i = 0 ; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[i] > arr[j]) {
        // 找到比第一个小的，就交换
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  console.log('bubleArr', arr)
}

bubleArr([1,5,7,2,0,8,6])

// 冒泡,先找最大的
function bubleArr2(arr) {
  for(let i = arr.length ; i >= 0; i--) {
    for(let j = i - 1; j >= 0; j--) {
      if(arr[i] < arr[j]) {
        // 找到比最后一个大的，就交换
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  console.log('bubleArr2', arr)
}
bubleArr2([1,5,7,2,0,8,6])

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