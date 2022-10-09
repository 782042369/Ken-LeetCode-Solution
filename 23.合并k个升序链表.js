/*
 * @Author: yanghongxuan
 * @Date: 2022-10-09 18:01:41
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2022-10-09 18:26:42
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
 * https://leetcode.cn/problems/merge-k-sorted-lists/description/
 *
 * algorithms
 * Hard (57.29%)
 * Likes:    2198
 * Dislikes: 0
 * Total Accepted:    555.9K
 * Total Submissions: 970K
 * Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
const merge = (l1, l2) => {
  const dummy = new ListNode(0)
  let h = dummy
  while (l1 !== null && l2 !== null) {
    if (l1.val > l2.val) {
      h.next = l2
      l2 = l2.next
    } else {
      h.next = l1
      l1 = l1.next
    }
    h = h.next
  }
  h.next = l1 || l2
  return dummy.next
}
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length === 0) return null
  while (lists.length > 1) {
    const l1 = lists.shift()
    const l2 = lists.shift()
    const h = merge(l1, l2)
    lists.push(h)
  }
  return lists[0]
}
// @lc code=end
const l = [
  {
    val: 1,
    next: {
      val: 3,
      next: {
        val: 10,
        next: null
      }
    }
  },
  {
    val: 1,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  },
  {
    val: 2,
    next: {
      val: 6,
      next: null
    }
  }
]
console.log(mergeKLists(l))
