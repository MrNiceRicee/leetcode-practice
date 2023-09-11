import { describe, expect, test } from "bun:test";
import { canConstruct } from "./canConstruct";

describe("canConstruct", () => {
  test("input: aa, aab", () => {
    const ransomNote = "aa";
    const magazine = "aab";
    const results = canConstruct(ransomNote, magazine);
    expect(results).toBe(true);
  });
});
