// !!从后往前赋值。 
function mergeArr(nums1, m, nums2, n) {
  let len1 = m - 1
  let len2 = n - 1
  let len = m + n -1
  let res = -Infinity
  while(len2 >= 0) {
    if(len1 <=0) {
      //nums1的数组全部比较完(此时nums1[0]仍未比较)，剩下len2的全部插入进去
      if(nums2[len2] > res) {
        nums1[len--] = nums2[len2--]
      } else {
        nums1[len--] = res
        res = -Infinity
      }      
      continue
    }
    nums1[len--] = nums1[len1] >= nums2[len2] ? nums1[len1--] : nums2[len2--]
    res = nums1[len1]
  }
  console.log('mergeArr', nums1)
}
let nums1 = [0,2,2,3], m = 4
let nums2 = [-1,1,4,5,6], n = 5
mergeArr(nums1, m, nums2, n)