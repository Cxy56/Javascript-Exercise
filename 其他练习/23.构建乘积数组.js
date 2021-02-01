/*
 * @Description: 
 * @Author: xychen21
 * @Date: 2020-07-06 14:38:35
 * @LastEditTime: 2020-07-06 14:46:56
 * @LastEditors:  
 */
// 给定一个数组 A[0,1,…,n-1]，请构建一个数组 B[0,1,…,n-1]，其中 B 中的元素 B[i]=A[0]×A[1]×…×A[i-1]×A[i+1]×…×A[n-1]。不能使用除法。
/*
解题思路
left从左往右遍历，逐个求出从索引0对应值一直乘到 到当前索引的乘积结果；
right从右往左遍历，逐个求出从最后一个值乘到当前值得乘积结果。
然后 结果就是b[i] = left[i-1] *right[i+1];
*/
//对称遍历
var constructArr = function(a) {
  let left=[];
  let right=[];
  let len = a.length;
  for(let i = 0;i < len ; i++){
      let j=len-i-1;
      if(i == 0){
          left[i] = a[i];
          right[j] = a[j];
      }else{
          left[i] = left[i-1] * a[i];
          right[j] = right[j+1] * a[j]; 
      }
     
  }
  // console.log(left);
  // console.log(right);

  let b=[];
  for(let i=0;i<len;i++){
      if(i===0)b[i]=right[i+1];
      else if(i===len-1)b[i]=left[i-1];
      else b[i] = left[i-1] *right[i+1];
  }
  return b;
};