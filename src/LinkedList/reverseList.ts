import { expect } from "../expect";
import ListNode from "./ListNode";

export function reverseList(head: ListNode | null): ListNode | null {
  // base case
  if (!head || !head.next) return head;

  // recursive case
  const newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
}

export const reverseListIteration = (
  head: ListNode | null
): ListNode | null => {
  const dummy = new ListNode(0);
  let current = head;
  while (current) {
    const next = current.next;
    current.next = dummy.next;
    dummy.next = current;
    current = next;
  }
  return dummy.next;
};

export const reverseListPractice = (
  head: ListNode | null
): ListNode | null => {
  const previous = new ListNode(0);
  let current = head;
  while (current) {
    const next = current.next;
    current.next = previous.next
    previous.next = current;
    current = next;
  }
  return previous.next

};

export const reverseListTest = (
  testFunc: (head: ListNode | null) => ListNode | null
) => {
  const l1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
  console.log(
    "initial",
    l1.val,
    l1.next?.val,
    l1.next?.next?.val,
    l1.next?.next?.next?.val
  );
  const result = testFunc(l1);
  expect(result?.val, 4);
  expect(result?.next?.val, 3);
  expect(result?.next?.next?.val, 2);
  expect(result?.next?.next?.next?.val, 1);
  expect(result?.next?.next?.next?.next, null);
};
