/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

*/

function loopSolution(ransomNote: string, magazine: string): boolean {
  // This is O(n^2) because we are using indexOf, which is O(n), inside of a for loop, which is O(n).
  const magazineChars = magazine.split("");
  for (let i = 0; i < ransomNote.length; i++) {
    const index = magazineChars.indexOf(ransomNote[i]);
    if (index === -1) return false;
    magazineChars.splice(index, 1);
  }

  return true;
}

function hashSolution(ransomNote: string, magazine: string): boolean {
  // This is O(n) because we are using a hash map to store the characters of magazine.
  const magazineChars: { [key: string]: number } = {};
  for (const char of magazine) {
    magazineChars[char] = magazineChars[char] ? magazineChars[char] + 1 : 1;
  }
  for (const char of ransomNote) {
    if (!magazineChars[char]) return false;
    magazineChars[char]--;
  }

  return true;
}

export function canConstruct(ransomNote: string, magazine: string): boolean {
  if (!ransomNote || !magazine) return false;
  if (ransomNote.length > magazine.length) return false;

  // We iterate through ransomNote and check if each character is contained in magazineChars.
  // If it is, we remove the character from magazineChars.
  // If it isn't, we return false.

  return loopSolution(ransomNote, magazine);
  // return hashSolution(ransomNote, magazine);
}
