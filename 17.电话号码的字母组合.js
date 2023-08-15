/*
 * @Author: yanghongxuan
 * @Date: 2022-10-09 10:28:43
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2022-10-09 11:14:10
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 * https://leetcode.cn/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (57.79%)
 * Likes:    2140
 * Dislikes: 0
 * Total Accepted:    582K
 * Total Submissions: 1M
 * Testcase Example:  '"23"'
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits == null || digits.length === 0) return [];

    const map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    };

    const res = [];
    const deep = (i = 0, s = '') => {
        if (i === digits.length) {
            res.push(s);
            return;
        }
        Object.keys(map[digits[i]]).forEach(ele => {
            deep(i + 1, s + map[digits[i]][ele]);
        });
    };

    deep();
    return res;
};
// @lc code=end

// const digits = '23'
// console.log(letterCombinations(digits))
