/*
 * @Author: yanghongxuan
 * @Date: 2022-10-09 09:54:54
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2022-10-09 10:28:10
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 * https://leetcode.cn/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (45.46%)
 * Likes:    1261
 * Dislikes: 0
 * Total Accepted:    412.2K
 * Total Submissions: 906.5K
 * Testcase Example:  '[-1,2,1,-4]\n1'
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let min = Infinity
  nums.sort((a, b) => a - b)
  const len = nums.length
  for (let i = 0; i < len; i++) {
    let [left, right] = [i + 1, len - 1]
    while (left < right) {
      // 当前三数之和
      let sum = nums[i] + nums[left] + nums[right]
      // 如果当前和更接近，更新最小值
      if (Math.abs(sum - target) < Math.abs(min - target)) {
        min = sum
      }
      // 根据sum和target的关系，移动指针
      if (sum < target) {
        left++
      } else if (sum > target) {
        right--
      } else {
        // sum和target相等，直接返回sum，肯定是最小的了
        return sum
      }
    }
  }
  return min
}
// @lc code=end
