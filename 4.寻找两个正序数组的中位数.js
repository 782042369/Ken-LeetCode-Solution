/*
 * @Author: yanghongxuan
 * @Date: 2022-07-29 10:32:26
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2022-07-29 10:46:49
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 * https://leetcode.cn/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (41.51%)
 * Likes:    5677
 * Dislikes: 0
 * Total Accepted:    766.3K
 * Total Submissions: 1.8M
 * Testcase Example:  '[1,3]\n[2]'
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const arr = [...nums1, ...nums2];
    const len = arr.length;
    if (len === 1) return arr[0];
    arr.sort((a, b) => a - b);
    if (len % 2 === 0) {
        const theMiddle = len / 2;
        return (arr[theMiddle] + arr[theMiddle - 1]) / 2;
    } else {
        return arr[(len - 1) / 2];
    }
};
// @lc code=end

var nums1 = [3];
var nums2 = [-2, -1];
const result = findMedianSortedArrays(nums1, nums2);
console.log('result: ', result);
