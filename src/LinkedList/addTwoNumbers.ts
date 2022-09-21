import { expect } from "../expect";
import ListNode from "./ListNode";

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let sum = 0;
  let current = new ListNode(0);
  let result = current;

  // loop until one list gets exhausted
  while (l1 || l2) {
    // check both l1 & l2  if they exist
    if (l1) {
      sum += l1.val; // add l1 value to sum
      l1 = l1.next; // move head
    }

    if (l2) {
      sum += l2.val; // add l2 value to sum
      l2 = l2.next; // move head
    }

    current.next = new ListNode(sum % 10);
    current = current.next;

    sum = sum > 9 ? 1 : 0;
  }

  if (sum) {
    current.next = new ListNode(sum);
  }

  return result.next;
}

export const addTwoNumbersTest = () => {
  const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
  const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
  const result = addTwoNumbers(l1, l2);
  expect(result?.val, 7);
  expect(result?.next?.val, 0);
  expect(result?.next?.next?.val, 8);
};


export default addTwoNumbers;