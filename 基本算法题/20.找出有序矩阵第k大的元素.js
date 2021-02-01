/*
 * @Description: 
 * @Author: xychen21
 * @Date: 2020-07-02 12:00:26
 * @LastEditTime: 2020-07-02 12:01:05
 * @LastEditors:  
 */
// 给定一个 n x n 矩阵，其中每行和每列元素均按升序排序，找到矩阵中第 k 小的元素。
// 请注意，它是排序后的第 k 小元素，而不是第 k 个不同的元素。

// 取中间值，
// 求中间值的index
// 根据index重新确认边界
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
	let row = matrix.length;
	let col = matrix[0].length;
	let left = matrix[0][0];
	let right = matrix[row - 1][col - 1];
	while (left < right) {
		let mid = Math.floor((left + right) / 2);
		// 在二位矩阵中计算小于mid的个数
		let count = findLessThanMid(matrix, mid, row, col);
		if (count < k) {
			left = mid + 1;
		} else {
			right = mid;
		}
	}
	return right;
};

findLessThanMid = (matrix, mid, row, col) => {
	let i = row - 1;
	let j = 0;
	let count = 0;
	while (i >= 0 && j < col) {
		if (matrix[i][j] <= mid) {
			count += i + 1;
			j++;
		} else {
			i--;
		}
	}
	return count;
};
