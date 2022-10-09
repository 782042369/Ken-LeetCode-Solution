/*
 * @Author: yanghongxuan
 * @Date: 2022-10-09 16:00:06
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2022-10-09 16:08:50
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 * https://leetcode.cn/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (44.57%)
 * Likes:    3542
 * Dislikes: 0
 * Total Accepted:    1.3M
 * Total Submissions: 2.8M
 * Testcase Example:  '"()"'
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const res = []
  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  for (let i = 0; i < s.length; i++) {
    const key = s[i]
    const value = map[key]
    if (value) {
      res.push(value)
    } else if (key !== res.pop()) {
      return false
    }
  }
  return res.length === 0
}
// @lc code=end
console.log(isValid('([{}])()'))
