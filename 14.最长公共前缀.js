/*
 * @Author: yanghongxuan
 * @Date: 2022-10-08 17:21:29
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2022-10-08 17:32:27
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 * https://leetcode.cn/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (42.98%)
 * Likes:    2494
 * Dislikes: 0
 * Total Accepted:    954.2K
 * Total Submissions: 2.2M
 * Testcase Example:  '["flower","flow","flight"]'
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
  return strs.reduce((prev, next) => {
    let i = 0
    while (prev[i] && next[i] && prev[i] === next[i]) i++
    return prev.slice(0, i)
  })
}
// @lc code=end

console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
