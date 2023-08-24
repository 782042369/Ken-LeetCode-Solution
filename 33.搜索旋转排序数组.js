/*
 * @Author: yanghongxuan
 * @Date: 2023-08-15 17:50:48
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2023-08-15 18:29:34
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }
        // When dividing the roated array into two halves, one must be sorted.
        // Check if the left side is sorted
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target <= nums[mid]) {
                // target is in the left
                right = mid - 1;
            } else {
                // target is in the right
                left = mid + 1;
            }
        }
        // Otherwise, the right side is sorted
        else {
            if (nums[mid] <= target && target <= nums[right]) {
                // target is in the right
                left = mid + 1;
            } else {
                // target is in the left
                right = mid - 1;
            }
        }
    }
    return -1;
};
// @lc code=end

const nums = [4, 5, 6, 7, 0, 1, 2],
    target = 2;
console.log(search(nums, target));
