/*
 * @Author: yanghongxuan
 * @Date: 2022-09-29 15:47:36
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2022-09-29 15:52:14
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 * https://leetcode.cn/problems/reverse-integer/description/
 *
 * algorithms
 * Medium (35.37%)
 * Likes:    3640
 * Dislikes: 0
 * Total Accepted:    1.1M
 * Total Submissions: 3.1M
 * Testcase Example:  '123'
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const absNum = Math.abs(x).toString().split('').reverse().join('')
  if (absNum > 2 ** 31) return 0
  return absNum * Math.sign(x)
}
// @lc code=end
const x = -11112
console.log(reverse(x) === -21111)
