/*
 * @Author: yanghongxuan
 * @Date: 2022-07-29 18:17:59
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2022-09-29 15:04:50
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 * https://leetcode.cn/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (36.92%)
 * Likes:    5507
 * Dislikes: 0
 * Total Accepted:    1.1M
 * Total Submissions: 3.1M
 * Testcase Example:  '"babad"'
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
    var res = "";
    for (var i=0; i<s.length;i++) {
        // 奇数情况
        var left = i;
        var right = i;
        while(left >=0 && right < s.length && s[left]===s[right]) {
            left--;
            right++;
        }
        if (res.length < right-left-1) {
            res = s.substr(left+1, right-left-1);
        }
        // 偶数情况
        left = i;
        right = i+1;
        while(left >=0 && right < s.length && s[left]===s[right]) {
            left--;
            right++;
        }
        if (res.length < right-left-1) {
            res = s.substr(left+1, right-left-1);
        }
    }
    return res;
 */
var longestPalindrome = function (s) {
  let res = ''
  for (let i = 0; i < s.length; i++) {
    // 奇数情况
    let left = i
    let right = i
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--
      right++
    }
    if (res.length < right - left - 1) {
      res = s.substr(left + 1, right - left - 1)
    }
    // 偶数情况
    left = i
    right = i + 1
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--
      right++
    }
    if (res.length < right - left - 1) {
      res = s.substr(left + 1, right - left - 1)
    }
  }
  return res
}
// @lc code=end

const result = longestPalindrome('b1abba1aaaaa')
console.log('result: ', result)
