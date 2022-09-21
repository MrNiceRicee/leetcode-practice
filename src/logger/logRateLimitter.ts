import { expect } from "../expect";

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */

/*

Design a logger system that receives a stream of messages along with their timestamps. Each unique message should only be printed at most every 10 seconds (i.e. a message printed at timestamp t will prevent other identical messages from being printed until timestamp t + 10).

All messages will come in chronological order. Several messages may arrive at the same timestamp.

Implement the Logger class:

Logger() Initializes the logger object.
bool shouldPrintMessage(int timestamp, string message) Returns true if the message should be printed in the given timestamp, otherwise returns false.


*/
class Logger {
  timeKeep: Map<string, number>;
  constructor() {
    // keep track of the last time a message was printed
    this.timeKeep = new Map();
  }

  shouldPrintMessage(timestamp: number, message: string): boolean {
    // if the message is not in the map, then add it
    if (!this.timeKeep.has(message)) {
      this.timeKeep.set(message, timestamp);
      return true;
    }
    // if the message is in the map, then check if the time is greater than 10
    const lastTime = this.timeKeep.get(message);
    if (timestamp - (lastTime || 0) >= 10) {
      this.timeKeep.set(message, timestamp);
      return true;
    }
    return false;
  }
}

/*
["Logger","shouldPrintMessage","shouldPrintMessage","shouldPrintMessage","shouldPrintMessage","shouldPrintMessage","shouldPrintMessage","shouldPrintMessage","shouldPrintMessage","shouldPrintMessage","shouldPrintMessage"]
[[],[0,"A"],[0,"B"],[0,"C"],[0,"A"],[0,"B"],[0,"C"],[0,"A"],[0,"B"],[0,"C"],[0,"A"]]

*/
export const LoggerTest = () => {
  const logger = new Logger();
  expect(logger.shouldPrintMessage(0, "A"), true);
  expect(logger.shouldPrintMessage(0, "B"), true);
  expect(logger.shouldPrintMessage(0, "C"), true);
  expect(logger.shouldPrintMessage(0, "A"), false);
  expect(logger.shouldPrintMessage(0, "B"), false);
  expect(logger.shouldPrintMessage(0, "C"), false);
  expect(logger.shouldPrintMessage(0, "A"), false);
  expect(logger.shouldPrintMessage(0, "B"), false);
  expect(logger.shouldPrintMessage(0, "C"), false);
  expect(logger.shouldPrintMessage(0, "A"), false);
  /*
["Logger","shouldPrintMessage","shouldPrintMessage","shouldPrintMessage","shouldPrintMessage","shouldPrintMessage","shouldPrintMessage","shouldPrintMessage","shouldPrintMessage","shouldPrintMessage","shouldPrintMessage"]
[[],[0,"A"],[0,"B"],[0,"C"],[0,"A"],[0,"B"],[0,"C"],[11,"A"],[11,"B"],[11,"C"],[11,"A"]]
  */
  const logger2 = new Logger();
  expect(logger2.shouldPrintMessage(0, "A"), true);
  expect(logger2.shouldPrintMessage(0, "B"), true);
  expect(logger2.shouldPrintMessage(0, "C"), true);
  expect(logger2.shouldPrintMessage(0, "A"), false);
  expect(logger2.shouldPrintMessage(0, "B"), false);
  expect(logger2.shouldPrintMessage(0, "C"), false);
  expect(logger2.shouldPrintMessage(11, "A"), true);
  expect(logger2.shouldPrintMessage(11, "B"), true);
  expect(logger2.shouldPrintMessage(11, "C"), true);
  expect(logger2.shouldPrintMessage(11, "A"), false);
};

export default Logger;
