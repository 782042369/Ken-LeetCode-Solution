/*
 * @Author: yanghongxuan
 * @Date: 2022-09-29 15:21:25
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2022-09-29 15:46:31
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 * https://leetcode.cn/problems/zigzag-conversion/description/
 *
 * algorithms
 * Medium (52.01%)
 * Likes:    1829
 * Dislikes: 0
 * Total Accepted:    491.3K
 * Total Submissions: 944.8K
 * Testcase Example:  '"PAYPALISHIRING"\n3'
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1 || s.length < numRows) return s;
    const result = [];
    let count = 0;
    let reverse = false;
    for (let i = 0; i < numRows; i++) {
        result[i] = [];
    }
    for (let i = 0; i < s.length; i++) {
        result[count].push(s[i]);
        reverse ? count-- : count++;
        if (count === numRows - 1 || count === 0) reverse = !reverse;
    }
    return result.flat().join('');
};
// @lc code=end

const s = 'PAYPALISHIRING',
    numRows = 3;
console.log('result: ', convert(s, numRows) === 'PAHNAPLSIIGYIR');
