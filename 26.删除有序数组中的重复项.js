/*
 * @Author: yanghongxuan
 * @Date: 2022-10-10 11:05:40
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2022-10-10 11:23:06
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-array/description/
 *
 * algorithms
 * Easy (54.44%)
 * Likes:    2872
 * Dislikes: 0
 * Total Accepted:    1.3M
 * Total Submissions: 2.4M
 * Testcase Example:  '[1,1,2]'
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      nums[++i] = nums[j]
    }
  }
  return ++i
}
// @lc code=end

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4]))
