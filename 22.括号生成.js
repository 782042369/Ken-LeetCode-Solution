/*
 * @Author: yanghongxuan
 * @Date: 2022-10-09 17:33:41
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2022-10-09 17:51:51
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 * https://leetcode.cn/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (77.55%)
 * Likes:    2900
 * Dislikes: 0
 * Total Accepted:    601.6K
 * Total Submissions: 775.7K
 * Testcase Example:  '3'
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    console.log('n: ', n);
    const res = [];
    const helper = (l, r, s) => {
        if (s.length === n * 2) {
            res.push(s);
            return;
        }
        if (r < l) helper(l, r + 1, s + ')');
        if (l < n) helper(l + 1, r, s + '(');
    };
    helper(0, 0, '');
    return res;
};
// @lc code=end

console.log(generateParenthesis(2));
