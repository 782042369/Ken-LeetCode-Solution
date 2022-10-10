/*
 * @Author: yanghongxuan
 * @Date: 2022-10-10 15:05:59
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2022-10-10 15:37:56
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 找出字符串中第一个匹配项的下标
 * https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
 *
 * algorithms
 * Medium (41.55%)
 * Likes:    1614
 * Dislikes: 0
 * Total Accepted:    747K
 * Total Submissions: 1.8M
 * Testcase Example:  '"sadbutsad"\n"sad"'
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === '' || needle === haystack) return 0
  const nlen = needle.length
  const hlen = haystack.length
  if (hlen < nlen) return -1
  for (let i = 0; i < hlen - nlen + 1; i++) {
    if (haystack[i] === needle[0]) {
      if (haystack.slice(i, i + needle.length) === needle) {
        return i
      }
    }
  }
  return -1
}
// @lc code=end

const haystack = '123',
  needle = '23'
console.log(strStr(haystack, needle))
