/*
 * @Author: yanghongxuan
 * @Date: 2022-10-19 15:48:00
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2022-10-19 16:39:34
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 * https://leetcode.cn/problems/next-permutation/description/
 *
 * algorithms
 * Medium (37.97%)
 * Likes:    1943
 * Dislikes: 0
 * Total Accepted:    371.7K
 * Total Submissions: 978.4K
 * Testcase Example:  '[1,2,3]'
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  if (!nums || nums.length === 0) return []
  const len = nums.length
  const nextLarge = (idx) => {
    for (let i = len - 1; i > idx; i--) {
      if (nums[i] > nums[idx]) return i
    }
  }
  // 交换
  const swap = (i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]])
  // 反转
  const reverse = (idx) => {
    let start = idx,
      end = len - 1

    while (start < end) {
      swap(start, end)
      start++
      end--
    }
  }
  for (let i = len - 1; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      const large = nextLarge(i)
      swap(i, large)
      reverse(i + 1)
      return
    }
  }
}
// @lc code=end

const nums = [1, 2, 3]
nextPermutation(nums)
console.log('nums: ', nums)
