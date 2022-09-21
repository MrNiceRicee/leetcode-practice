import { expect } from "../expect";

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
class MyCalendar {
  bookings: Set<[number, number]>;
  constructor() {
    this.bookings = new Set();
  }

  overlap(booking1: [number, number], booking2: [number, number]): boolean {
    const [start1, end1] = booking1;
    const [start2, end2] = booking2;
    return start1 < end2 && start2 < end1;
  }

  book(start: number, end: number): boolean {
    // check if it has the booking
    if (this.bookings.has([start, end])) {
      return false; // not allowed as it is a double booking
    }
    // known that there is no EXACT booking
    // check if there is a booking that overlaps
    for (let booking of this.bookings) {
      if (this.overlap(booking, [start, end])) {
        return false;
      }
    }
    // if it gets here, then it is a valid booking
    this.bookings.add([start, end]);
    return true;
  }
}

class TreeNode {
  start: number;
  end: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
    this.left = null;
    this.right = null;
  }
}

// function TreeNode (start: number, end: number) {
//   this.start = start;
//   this.end = end;
//   this.left = null;
//   this.right = null;
// }


class MyCalendarBinary {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  insert(start: number, end: number, node: TreeNode | null): boolean {
    // base case, if we reach the end of the tree
    // then we can insert the new node
    if (node === null) {
      node = new TreeNode(start, end);
      return true;
    }
    // if the new node overlaps with the current node
    // then we cannot insert it
    // if the new node is less than the current node
    // then we need to insert it to the left
    if (start >= node.end) {
      return this.insert(start, end, node.right);
    }
    // if the new node is greater than the current node
    // then we need to insert it to the right
    if (end <= node.start) {
      return this.insert(start, end, node.left);
    }
    // if it gets here, then it is a double booking
    return false;
  }

  book(start: number, end: number): boolean {
    // base case, if root is null set it to the new node
    if (this.root === null) {
      this.root = new TreeNode(start, end);
      return true;
    }
    return this.insert(start, end, this.root);
  }
}

export const calendarTest = () => {
  const calendar = new MyCalendar();
  expect(calendar.book(10, 20), true);
  expect(calendar.book(15, 25), false);
  expect(calendar.book(20, 30), true);
  /*
["MyCalendar","book","book","book","book","book"]
[[],[37,50],[33,50],[4,17],[35,48],[8,25]]
  */
  const calendar2 = new MyCalendar();
  expect(calendar2.book(37, 50), true);
  expect(calendar2.book(33, 50), false);
  expect(calendar2.book(4, 17), true);
  expect(calendar2.book(35, 48), false);
  expect(calendar2.book(8, 25), true);
  /*
["MyCalendar","book","book","book","book","book","book","book","book","book","book"]
[[],[47,50],[33,41],[39,45],[33,42],[25,32],[26,35],[19,25],[3,8],[8,13],[18,27]]
  */
  const calendar3 = new MyCalendar();
  expect(calendar3.book(47, 50), true);
  expect(calendar3.book(33, 41), true);
  expect(calendar3.book(39, 45), true);
  expect(calendar3.book(33, 42), false);
  expect(calendar3.book(25, 32), true);
  expect(calendar3.book(26, 35), true);
  expect(calendar3.book(19, 25), true);
  expect(calendar3.book(3, 8), true);
  expect(calendar3.book(8, 13), true);
  expect(calendar3.book(18, 27), true);

};
