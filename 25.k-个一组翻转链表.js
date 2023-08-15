/*
 * @Author: yanghongxuan
 * @Date: 2023-08-15 15:19:03
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2023-08-15 17:08:55
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    var dummy = new ListNode(0);
    dummy.next = head;
    var prevGroupTail = dummy;

    while (head) {
        var groupStart = head;
        var groupEnd = getGroupEnd(head, k);

        if (!groupEnd) break;

        prevGroupTail.next = reverseList(groupStart, groupEnd.next);
        prevGroupTail = groupStart;
        head = prevGroupTail.next;
    }
    var newHead = dummy.next;
    console.log('newHead: ', newHead);
    return newHead;
};

var getGroupEnd = function (head, k) {
    while (head && k > 1) {
        head = head.next;
        k--;
    }
    return head;
};

var reverseList = function (head, stop) {
    var prev = stop;
    while (head !== stop) {
        var next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
};
// @lc code=end
console.log(
    '1',
    reverseKGroup({
        val: 1,
        next: {
            val: 2,
            next: {
                val: 3,
                next: {
                    val: 4,
                    next: {
                        val: 5,
                        next: null,
                    },
                },
            },
        },
    }),
    2,
);
