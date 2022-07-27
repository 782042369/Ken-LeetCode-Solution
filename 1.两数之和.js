/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 * https://leetcode.cn/problems/two-sum/description/
 *
 * algorithms
 * Easy (52.72%)
 * Likes:    14930
 * Dislikes: 0
 * Total Accepted:    3.6M
 * Total Submissions: 6.9M
 * Testcase Example:  '[2,7,11,15]\n9'
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const data = nums[i]
    if (map.has(target - data)) {
      return [map.get(target - data), i]
    } else {
      map.set(data, i)
    }
  }
  return []
}
// @lc code=end
