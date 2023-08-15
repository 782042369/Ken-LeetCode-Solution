/*
 * @Author: yanghongxuan
 * @Date: 2022-10-09 16:29:21
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2022-10-09 17:07:59
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 * https://leetcode.cn/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (66.67%)
 * Likes:    2722
 * Dislikes: 0
 * Total Accepted:    1.2M
 * Total Submissions: 1.8M
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    const mergedHead = { val: -1, next: null };
    let h = mergedHead;
    while (list1 && list2) {
        if (list1.val > list2.val) {
            h.next = list2;
            list2 = list2.next;
        } else {
            h.next = list1;
            list1 = list1.next;
        }
        h = h.next;
        console.log('h: ', h);
    }
    h.next = list1 || list2;
    return mergedHead.next;
};
// @lc code=end
const l1 = {
        val: 1,
        next: {
            val: 2,
            next: {
                val: 4,
                next: null,
            },
        },
    },
    l2 = {
        val: 1,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null,
            },
        },
    };
console.log(mergeTwoLists(l1, l2));
