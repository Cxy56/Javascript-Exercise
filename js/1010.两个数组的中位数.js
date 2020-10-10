
var findMedianSortedArrays = function(nums1, nums2) {
  let num = nums1.concat(nums2);
  num = num.sort((a, b) => a - b); // 此处利用两个有序数组的合并，降低时间复杂度为o(m + n)
  let mid = Math.floor(num.length / 2);
  if (num.length % 2 === 0) {
      return (num[mid-1] + num[mid])/2
  } else {
      return num[mid]
  }
}