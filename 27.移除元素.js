/*
 * @Author: yanghongxuan
 * @Date: 2022-10-10 13:59:42
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2022-10-10 14:10:45
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 * https://leetcode.cn/problems/remove-element/description/
 *
 * algorithms
 * Easy (59.38%)
 * Likes:    1514
 * Dislikes: 0
 * Total Accepted:    854K
 * Total Submissions: 1.4M
 * Testcase Example:  '[3,2,2,3]\n3'
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let index = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[index++] = nums[i]
    }
  }
  return index
}
// @lc code=end
const nums = [3, 2, 2, 3],
  val = 3
console.log(removeElement(nums, val))
console.log('nums: ', nums)
