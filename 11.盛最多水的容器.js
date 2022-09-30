/*
 * @Author: yanghongxuan
 * @Date: 2022-09-29 17:57:12
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2022-09-30 09:43:50
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 * https://leetcode.cn/problems/container-with-most-water/description/
 *
 * algorithms
 * Medium (60.94%)
 * Likes:    3805
 * Dislikes: 0
 * Total Accepted:    843K
 * Total Submissions: 1.4M
 * Testcase Example:  '[1,8,6,2,5,4,8,3,7]'
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let ans = 0,
    i = 0,
    j = height.length - 1
  while (i < j) {
    ans = Math.max(ans, Math.min(height[i], height[j]) * (j - i))
    height[i] <= height[j] ? i++ : j--
  }
  return ans
}

// @lc code=end

console.log(maxArea([2, 1, 1, 1]))
