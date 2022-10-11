/*
 * @Author: yanghongxuan
 * @Date: 2022-10-10 16:20:03
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2022-10-11 10:38:10
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 * https://leetcode.cn/problems/divide-two-integers/description/
 *
 * algorithms
 * Medium (22.19%)
 * Likes:    993
 * Dislikes: 0
 * Total Accepted:    186.9K
 * Total Submissions: 842.1K
 * Testcase Example:  '10\n3'
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  if (divisor === 0) return 0
  if (dividend === 0) return 0
  if (dividend === -2147483648 && divisor === -1) return 2147483647
  const isPositive = dividend > 0 !== divisor > 0

  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)
  let count = 1,
    result = 0,
    base = divisor

  while (dividend >= divisor) {
    count = 1
    base = divisor
    while (base <= dividend >> 1) {
      base = base << 1
      count = count << 1
    }
    result += count
    dividend -= base
  }

  if (!isPositive) result = -result
  return result
}
// @lc code=end

console.log(divide(10, 3))
