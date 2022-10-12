/*
 * @Author: yanghongxuan
 * @Date: 2022-10-11 10:48:48
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2022-10-12 10:44:51
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 * https://leetcode.cn/problems/substring-with-concatenation-of-all-words/description/
 *
 * algorithms
 * Hard (39.44%)
 * Likes:    829
 * Dislikes: 0
 * Total Accepted:    142.9K
 * Total Submissions: 362.1K
 * Testcase Example:  '"barfoothefoobarman"\n["foo","bar"]'
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  if (!words || !words.length) return []
  let wordLen = words[0].length
  let allWordsLen = wordLen * words.length
  let ans = [],
    wordMap = {}
  for (let w of words) {
    wordMap[w] ? wordMap[w]++ : (wordMap[w] = 1)
  }
  for (let i = 0; i < s.length - allWordsLen + 1; i++) {
    let wm = Object.assign({}, wordMap)
    for (let j = i; j < i + allWordsLen - wordLen + 1; j += wordLen) {
      let w = s.slice(j, j + wordLen)
      if (wm[w]) {
        wm[w]--
      } else {
        break
      }
    }
    if (Object.values(wm).every((n) => n === 0)) ans.push(i)
  }
  return ans
}
// @lc code=end
const s = 'barfoothefoobarman',
  words = ['foo', 'bar']
console.log(findSubstring(s, words))
