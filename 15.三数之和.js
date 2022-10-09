/*
 * @Author: yanghongxuan
 * @Date: 2022-10-08 17:33:02
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2022-10-09 09:53:12
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 * https://leetcode.cn/problems/3sum/description/
 *
 * algorithms
 * Medium (36.30%)
 * Likes:    5295
 * Dislikes: 0
 * Total Accepted:    1.2M
 * Total Submissions: 3.2M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return []
  const result = []
  const target = 0
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > target) break

    if (i > 0 && nums[i] === nums[i - 1]) continue

    let j = i + 1

    let k = nums.length - 1

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k]

      if (sum === target) {
        result.push([nums[i], nums[j], nums[k]])

        while (nums[j] === nums[j + 1]) j++
        while (nums[k] === nums[k - 1]) k--

        j++
        k--
      } else if (sum < target) {
        j++
      } else {
        k--
      }
    }
  }
  return result
}

// @lc code=end
