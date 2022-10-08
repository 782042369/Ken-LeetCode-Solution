/*
 * @Author: yanghongxuan
 * @Date: 2022-09-30 09:52:55
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2022-10-08 16:48:43
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 * https://leetcode.cn/problems/integer-to-roman/description/
 *
 * algorithms
 * Medium (66.15%)
 * Likes:    971
 * Dislikes: 0
 * Total Accepted:    334.4K
 * Total Submissions: 505.5K
 * Testcase Example:  '3'
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
const rom = [
  'M',
  'CM',
  'D',
  'CD',
  'C',
  'XC',
  'L',
  'XL',
  'X',
  'IX',
  'V',
  'IV',
  'I'
]
var intToRoman = function (num) {
  let ans = ''
  for (let i = 0; num; i++) {
    while (num >= val[i]) {
      ans += rom[i]
      num -= val[i]
    }
  }

  return ans
}
// @lc code=end
