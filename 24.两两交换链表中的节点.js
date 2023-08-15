/*
 * @Author: yanghongxuan
 * @Date: 2022-10-10 10:24:35
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2022-10-10 11:00:05
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 * https://leetcode.cn/problems/swap-nodes-in-pairs/description/
 *
 * algorithms
 * Medium (71.15%)
 * Likes:    1591
 * Dislikes: 0
 * Total Accepted:    527.9K
 * Total Submissions: 741.9K
 * Testcase Example:  '[1,2,3,4]'
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (!head || !head.next) return head;
    const l1 = head;
    const l2 = head.next;
    const l3 = l2.next;
    l2.next = l1;
    l1.next = swapPairs(l3);
    return l2;
};
// @lc code=end
const h = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null,
            },
        },
    },
};
console.log(swapPairs(h));
