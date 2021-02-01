/*
 * @Description: 
 * @Author: xychen21
 * @Date: 2020-07-14 17:55:17
 * @LastEditTime: 2020-07-14 18:02:47
 * @LastEditors:  
 */

 //!!输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。
let findKthLargest = function(nums, k) {
  // 进行k轮冒泡排序
  bubbleSort(nums, k)
  return nums.slice(nums.length - k)
}

function bubbleSort(arr, k) {
  for (let i = 0; i < k; i++) {
    // 提前退出冒泡循环的标识位
    let flag = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] < arr[j + 1]) {
            const temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            flag = true;
            // 表示发生了数据交换
        }
    }
    console.log('arr2', arr)
    // 没有数据交换
    if(!flag) break
  }
}

console.log(findKthLargest([1,2,3,1,9,7,0], 3))