/*
 * @Author: yanghongxuan
 * @Date: 2022-10-09 14:43:29
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2022-10-09 15:09:58
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 * https://leetcode.cn/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (44.65%)
 * Likes:    2255
 * Dislikes: 0
 * Total Accepted:    945.6K
 * Total Submissions: 2.1M
 * Testcase Example:  '[1,2,3,4,5]\n2'
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 先指针先走n-1步
  let fast = head
  for (let i = 1; i <= n - 1; i++) {
    fast = fast.next
  }
  let slow = head
  // 缓存要删除结点的前一个结点
  let pre = null
  while (fast.next) {
    pre = slow
    fast = fast.next
    slow = slow.next
  }
  // 如果要删除的结点是第一个结点的话，则直接返回slow.next
  if (pre === null) {
    return slow.next
  } else {
    pre.next = slow.next
  }
  return head
}
// @lc code=end
let head = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 5,
            next: null
          }
        }
      }
    }
  },
  n = 1
console.log(removeNthFromEnd(head, n))
