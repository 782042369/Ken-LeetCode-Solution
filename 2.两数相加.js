/*
 * @Author: yanghongxuan
 * @Date: 2022-07-27 12:18:14
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2022-07-27 14:39:31
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 * https://leetcode.cn/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (41.99%)
 * Likes:    8400
 * Dislikes: 0
 * Total Accepted:    1.4M
 * Total Submissions: 3.4M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
var addTwoNumbers = function (l1, l2) {
    let List = new ListNode(0);
    let head = List;
    let sum = 0;
    let carry = 0;

    while (l1 !== null || l2 !== null || sum > 0) {
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }
        if (sum >= 10) {
            carry = 1;
            sum = sum - 10;
        }

        head.next = new ListNode(sum);
        head = head.next;

        sum = carry;
        carry = 0;
    }

    return List.next;
};
// @lc code=end
