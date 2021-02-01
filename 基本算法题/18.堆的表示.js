/*
 * @Description: 
 * @Author: xychen21
 * @Date: 2020-06-22 11:57:49
 * @LastEditTime: 2020-06-22 13:44:54
 * @LastEditors:  
 */

// !!插入式建堆
/*插入节点：

将节点插入到队尾
自下往上堆化： 将插入节点与其父节点比较，如果插入节点大于父节点（大顶堆）或插入节点小于父节点（小顶堆），则插入节点与父节点调整位置
一直重复上一步，直到不需要交换或交换到根节点，此时插入完成。
*/
function insert(key) {
  items.push(key)
  // 获取存储位置
  let i = items.length-1 
  while (i/2 > 0 && items[i] > items[i/2]) {  
      swap(items, i, i/2); // 交换 
      i = i/2; 
  }
}  
function swap(items, i, j) {
  let temp = items[i]
  items[i] = items[j]
  items[j] = temp
}
// 时间复杂度： O(logn)，为树的高度


// 四、原地建堆（堆化）
// 自下而上式堆是调整节点与父节点（往上走），自上往下式堆化是调整节点与其左右子节点（往下走）。

// !! 1. 从前往后、自下而上式堆化建堆
// 将节点与其父节点比较，如果节点大于父节点（大顶堆）或节点小于父节点（小顶堆），则节点与父节点调整位置

function buildHeap(items, heapSize) {
  while(heapSize < items.length - 1) {
      heapSize ++
      heapify(items, heapSize)
  }
}

function heapify(items, i) {
  // 自下而上式堆化
  while (Math.floor(i/2) > 0 && items[i] < items[Math.floor(i/2)]) {  
      swap(items, i, Math.floor(i/2)); // 交换 
      i = Math.floor(i/2); 
  }
}  

function swap(items, i, j) {
  let temp = items[i]
  items[i] = items[j]
  items[j] = temp
}

// 测试
var items = [,5, 2, 3, 4, 1]
// 初始有效序列长度为 1
buildHeap(items, 1)
console.log(items)
// [empty, 1, 2, 3, 5, 4]

// !!2. 从后往前、自上而下式堆化建堆
// 将节点与其左右子节点比较，如果存在左右子节点大于该节点（大顶堆）或小于该节点（小顶堆），则将子节点的最大值（大顶堆）或最小值（小顶堆）与之交换
// 原地建堆
// items: 原始序列
// heapSize: 初始有效序列长度
function buildHeap(items, heapSize) {
  // 从最后一个非叶子节点开始，自上而下式堆化
  for (let i = Math.floor(heapSize/2); i >= 1; --i) {    
      heapify(items, heapSize, i);  
  }
}
function heapify(items, heapSize, i) {
  // 自上而下式堆化
  while (true) {
      var minIndex = i;
      if(2*i <= heapSize && items[i] > items[i*2] ) {
          minIndex = i*2;
      }
      if(2*i+1 <= heapSize && items[minIndex] > items[i*2+1] ) {
          minIndex = i*2+1;
      }
      if (minIndex === i) break;
      swap(items, i, minIndex); // 交换 
      i = minIndex; 
  }
}  
function swap(items, i, j) {
  let temp = items[i]
  items[i] = items[j]
  items[j] = temp
}

// 测试
var items = [,5, 2, 3, 4, 1]
// 因为 items[0] 不存储数据
// 所以：heapSize = items.length - 1
buildHeap(items, items.length - 1)
console.log(items)
// [empty, 1, 2, 3, 4, 5]