/*
 * @Author: yanghongxuan
 * @Date: 2022-10-09 11:14:57
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2022-10-09 14:27:28
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 * https://leetcode.cn/problems/4sum/description/
 *
 * algorithms
 * Medium (38.01%)
 * Likes:    1396
 * Dislikes: 0
 * Total Accepted:    378.8K
 * Total Submissions: 998.2K
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    if (!nums || nums.length < 4) return [];
    nums.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < nums.length - 3; i++) {
        for (let j = i + 1; j < nums.length - 2; j++) {
            let low = j + 1;
            let high = nums.length - 1;

            while (low < high) {
                const sum = nums[i] + nums[j] + nums[low] + nums[high];
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[low], nums[high]]);
                    while (nums[low] === nums[low + 1]) low++;
                    while (nums[high] === nums[high - 1]) high--;
                    low++;
                    high--;
                } else if (sum < target) {
                    low++;
                } else {
                    high--;
                }
            }
            while (nums[j] === nums[j + 1]) j++;
        }
        while (nums[i] === nums[i + 1]) i++;
    }
    return result;
};
// @lc code=end
const nums = [2, 2, 2, 2, 2],
    target = 8;
console.log(fourSum(nums, target));
