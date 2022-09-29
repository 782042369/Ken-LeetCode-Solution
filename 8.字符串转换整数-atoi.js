/*
 * @Author: yanghongxuan
 * @Date: 2022-09-29 16:08:59
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2022-09-29 16:20:03
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 * https://leetcode.cn/problems/string-to-integer-atoi/description/
 *
 * algorithms
 * Medium (21.49%)
 * Likes:    1536
 * Dislikes: 0
 * Total Accepted:    507.7K
 * Total Submissions: 2.4M
 * Testcase Example:  '"42"'
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  return Math.max(
    Math.min(parseInt(s) || 0, Math.pow(2, 31) - 1),
    -1 * Math.pow(2, 31)
  )
}
// @lc code=end

const s = '-214748364 987 aaa '
console.log(myAtoi(s))
