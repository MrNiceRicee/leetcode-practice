import { expect } from "../expect";
import ListNode from "./ListNode";

export function detectCycle(head: ListNode | null): ListNode | null {
  // if the list is empty or has only one node
  // then it cannot have a cycle
  if (head === null || head.next === null) {
    return null;
  }
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  // while the fast pointer is not at the end of the list
  // and the fast pointer is not two nodes ahead of the slow pointer
  while (fast !== null && fast.next !== null) {
    slow = slow?.next ?? null;
    fast = fast.next.next;
    // if the fast pointer and slow pointer are at the same node
    // then there is a cycle
    if (slow === fast) {
      // move the slow pointer to the head
      slow = head;
      // move the slow and fast pointers one node at a time
      // until they are at the same node
      while (slow !== fast) {
        slow = slow?.next ?? null;
        fast = fast?.next ?? null;
      }
      // return either slow or fast
      return slow;
    }
  }
  // if it gets here, then there is no cycle
  return null;
}

// export const detectCycleTest = (
//   testFunc: (head: ListNode | null) => ListNode | null
// ) => {
//   console.log("Testing detectCycle on [3,2,0,-4] with pos = 1");
//   const l1 = new ListNode(
//     3,
//     new ListNode(2, new ListNode(0, new ListNode(-4)))
//   );
//   // @ts-expect-error
//   l1.next?.next?.next?.next = l1.next;
//   expect(testFunc(l1)?.val, 2);
//   console.log("Testing detectCycle on [1,2] with pos = 0");
//   const l2 = new ListNode(1, new ListNode(2));
//   l2.next?.next = l2;
//   expect(testFunc(l2)?.val, 1);
//   console.log("Testing detectCycle on [1] with pos = -1");
//   const l3 = new ListNode(1);
//   expect(testFunc(l3), null);
//   console.log("All tests passed.");
// };
