// ***************!! 1. 文章打卡
// 如何让 a === a - 1 
// 1. a = infinity  或 a = -infinity
// 2. js精度 - 2^53 + 1 到 2^53 - 1， a在此范围之外也可以相等


// ***************!!2. 单选10个
// 1. use strict
function getAge() {
  "use strict"
  age  = 20
  console.log(age)
}

// getAge() // ReferenceError: age is not defined

// !!2. 数组的push
try {
  let newList = [1,2,3].push(4,5) //push返回新数组的长度 ，newList = 5
  console.log('newList1', newList)
  newList.push(5)
  console.log('newList')
} catch(e) {
  console.log(e)
}

// 3. 
let greet;
greet = {}
console.log('greet', greet)

// !!4. 
parseInt('7*6', 10) // 7

// 5. 
console.log(typeof typeof 1) // string

// 6. 
function nums(a , b) {

  return 
  a + b

}
console.log(nums(6,2)) // undefined  因为换行

// !!7.String.raw() 是一个模板字符串的标签函数，占位符（例如 ${foo}）会被处理为它所代表的其他字符串，而转义字符（例如 \n）不会。

console.log(String.raw`HELLO\nwoerirl`)

// 
const add = x => x + x

function my(num = 2, value = add(num)) {
  console.log(num, value)
}
my()// 2, 4  
my(3)// 3, 6  

// ***************!!3. 算法题
// 合并两个有序数组, 升序吧
function mergeArr(nums1, nums2) {
  let m = nums1.length - 1
  let n = nums2.length - 1
  len = m + n + 1
  while(m >= 0 && len >=0) {
    if(n < 0) {
      nums1[len--] = nums1[m--]
      continue
    }
    nums1[len--] = nums1[m] >= nums2[n] ? nums1[m--] : nums2[n--]
  }
  console.log('nums1', nums1)
  return nums1
}
mergeArr([0,1,2,3], [1,4,9])

// ***************!!3. 手写题
// 实现一个简单的模板字符串替换
 function render(template,obj){}

 for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log('j=========1', j)
  }
  for (let j = 0; j < 3; j++) {
    console.log('j=========2', j)
  }
}

var p = new Promise((resolve,reject) => {
  resolve('jjhjj')
})

p.then(() => {
  console.log(a)
}, (e) => {
  console.log('cuole===========', e)
}).catch(r => {
  console.log('oooo------------', r)
})