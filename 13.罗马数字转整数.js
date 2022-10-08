/*
 * @Author: yanghongxuan
 * @Date: 2022-10-08 16:49:16
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2022-10-08 17:18:06
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 * https://leetcode.cn/problems/roman-to-integer/description/
 *
 * algorithms
 * Easy (62.35%)
 * Likes:    2075
 * Dislikes: 0
 * Total Accepted:    719.3K
 * Total Submissions: 1.2M
 * Testcase Example:  '"III"'
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const symbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}
var romanToInt = function (s) {
  return s.split('').reduce((acc, cur, index) => {
    const num = symbols[cur]
    return num < symbols[s[index + 1]] ? acc - num : acc + num
  }, 0)
}
// @lc code=end
console.log(romanToInt('IV'))
