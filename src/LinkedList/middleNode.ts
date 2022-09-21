import { expect } from "../expect";
import ListNode from "./ListNode";

export function middleNode(head: ListNode | null): ListNode | null {
  let fast = head;
  let slow = head;
  while (fast != null && fast.next != null) {
    slow = slow?.next ?? null;
    fast = fast.next.next;
  }
  return slow;
}

export const middleNodeTest = (
  testFunc: (head: ListNode | null) => ListNode | null
) => {
  console.log("Testing middleNode on [1,2,3,4,5]");
  const l1 = new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
  );
  expect(testFunc(l1)?.val, 3);
  console.log("Testing middleNode on [1,2,3,4,5,6]");
  const l2 = new ListNode(
    1,
    new ListNode(
      2,
      new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))
    )
  );
  expect(testFunc(l2)?.val, 4);
  console.log("Testing middleNode on [1]");
  const l3 = new ListNode(1);
  expect(testFunc(l3)?.val, 1);
  console.log("Testing middleNode on []");
  expect(testFunc(null), null);

  console.log("All tests passed.");
};
