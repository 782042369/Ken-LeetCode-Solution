/*
 * @Author: yanghongxuan
 * @Date: 2023-08-15 15:12:28
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2023-08-15 15:39:27
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(S) {
    let stack = [-1], ans = 0
    for (let i = 0; i < S.length; i++) {
        if (S[i] === '(') {
            stack.push(i)
        } else if (stack.length === 1) {
            stack[0] = i
        } else {
            stack.pop()
            ans = Math.max(ans, i - stack[stack.length-1])
        }
    }
    return ans
}
// @lc code=end

console.log(longestValidParentheses("()()))(()"));
