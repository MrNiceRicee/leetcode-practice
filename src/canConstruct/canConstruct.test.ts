import { describe, expect, test } from "bun:test";
import { canConstruct } from "./canConstruct";

describe("canConstruct", () => {
  test("input: aa, aab", () => {
    const ransomNote = "aa";
    const magazine = "aab";
    const results = canConstruct(ransomNote, magazine);
    expect(results).toBe(true);
  });
  const testTable = [
    { ransomNote: "aa", magazine: "aab", results: true },
    { ransomNote: "aa", magazine: "ab", results: false },
    { ransomNote: "aa", magazine: "aab", results: true },
    { ransomNote: "aa", magazine: "ab", results: false },
    { ransomNote: "aa", magazine: "aab", results: true },
    { ransomNote: "aa", magazine: "ab", results: false },
    { ransomNote: "aa", magazine: "aab", results: true },
    { ransomNote: "aa", magazine: "ab", results: false },
    { ransomNote: "aa", magazine: "aab", results: true },
    { ransomNote: "aa", magazine: "ab", results: false },
  ];

  for (const { ransomNote, magazine, results } of testTable) {
    test(`input: ${ransomNote}, ${magazine}`, () => {
      const res = canConstruct(ransomNote, magazine);
      expect(res).toBe(results);
    });
  }
});
