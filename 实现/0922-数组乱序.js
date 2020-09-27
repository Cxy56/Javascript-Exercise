// !! sort排序元素会大概率停留在原位
// !!真的的随机 应该是 是否在原地 1/n
// 真正乱排序：
// 最后一位开始往前遍历。每次循环生成随机数：
// math.random()*(i+1) , 向下取整，然后两个位置元素交换；
// 实现真正的乱序

const shuffle = (arr) => {
  var result = [],
      random;
  while (arr.length > 0) {
      random = Math.floor(Math.random() * arr.length);
      console.log(random)
      result.push(arr[random])
      arr.splice(random, 1)
  }
  return result;
}

console.log('shuffle', shuffle([1,2,3,4,5,6]))

let shuffle2 = function(arr) {
  let copyArr = [...arr];
  let len = copyArr.length;
  for(let i = len - 1; i >= 0; i-- ) {
      let index = ~~(Math.random() * (i + 1));
      console.log(index)
      // [copyArr[index], copyArr[i]] = [copyArr[i], copyArr[index]];
      let temp = copyArr[i]
      copyArr[i] = copyArr[index]
      copyArr[index] = temp
  }
  return copyArr;
};

console.log('shuffle2', shuffle2([1,2,3,4,5,6]))




let shuffle3 = function(arr) {
  let copyArr = [...arr];
  let len = copyArr.length;
  for(let i = 0 ; i < len; i++ ) {
      let index = ~~(Math.random() * (i + 1));
      console.log(index)
      // [copyArr[index], copyArr[i]] = [copyArr[i], copyArr[index]];
      let temp = copyArr[i]
      copyArr[i] = copyArr[index]
      copyArr[index] = temp
  }
  return copyArr;
};

console.log('shuffle3', shuffle3([1,2,3,4,5,6]))
