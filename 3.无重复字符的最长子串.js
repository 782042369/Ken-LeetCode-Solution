/*
 * @Author: yanghongxuan
 * @Date: 2022-07-28 09:09:20
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2022-07-28 10:18:17
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (38.92%)
 * Likes:    7902
 * Dislikes: 0
 * Total Accepted:    1.9M
 * Total Submissions: 4.8M
 * Testcase Example:  '"abcabcbb"'
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const strMap = {}
  let left = 0
  // 切字符串
  return s.split('').reduce((max, val, i) => {
    left = strMap[val] >= left ? strMap[val] + 1 : left
    strMap[val] = i
    return Math.max(max, i - left + 1)
  }, 0)
}
// @lc code=end
