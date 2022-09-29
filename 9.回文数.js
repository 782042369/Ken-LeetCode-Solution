/*
 * @Author: yanghongxuan
 * @Date: 2022-09-29 16:20:30
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2022-09-29 16:26:28
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 * https://leetcode.cn/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (56.77%)
 * Likes:    2230
 * Dislikes: 0
 * Total Accepted:    1.2M
 * Total Submissions: 2.1M
 * Testcase Example:  '121'
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const result = x.toString()
  return result.split('').reverse().join('') === result
}
// @lc code=end

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
