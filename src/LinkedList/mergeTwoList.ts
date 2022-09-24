import { expect } from "../expect";
import ListNode from "./ListNode";

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // base case
  if (!list1) return list2;
  if (!list2) return list1;

  // recursive case
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  }
  list2.next = mergeTwoLists(list1, list2.next);
  return list2;
}

export const mergeTwoListIteration = (
  list1: ListNode | null,
  list2: ListNode | null
) => {
  const dummy = new ListNode(0);
  let current = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  if (list1) {
    current.next = list1;
  }

  if (list2) {
    current.next = list2;
  }

  return dummy.next;
};

export const mergeTwoListPractice = (
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null => {
  // if (!list1) return list2;
  // if (!list2) return list1;

  // if (list1.val > list2.val) {
  //   list2.next = mergeTwoListPractice(list1, list2.next);
  //   return list2;
  // }
  // list1.next = mergeTwoListPractice(list1.next, list2);
  // return list1;
  const dummy = new ListNode(0);
  let current = dummy;

  while (list1 && list2) {
    // check which is less, and then transition that one
    if (list1.val > list2.val) {
      current.next = list2;
      list2 = list2.next;
    } else {
      current.next = list1;
      list1 = list1.next;
    }
    // move current up
    current = current.next;
  }

  if (list1) {
    current.next = list1;
  }
  if (list2) {
    current.next = list2;
  }
  return dummy.next;
};

export const mergeTwoListsTest = (
  testFunc: (list1: ListNode | null, list2: ListNode | null) => ListNode | null
) => {
  const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
  const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
  const result = testFunc(l1, l2);
  expect(result?.val, 1);
  expect(result?.next?.val, 1);
  expect(result?.next?.next?.val, 2);
  expect(result?.next?.next?.next?.val, 3);
  expect(result?.next?.next?.next?.next?.val, 4);
  expect(result?.next?.next?.next?.next?.next?.val, 4);
};
