/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.


*/

export function canConstruct(ransomNote: string, magazine: string): boolean {
  if (!ransomNote || !magazine) return false;
  if (ransomNote.length > magazine.length) return false;

  // We iterate through ransomNote and check if each character is contained in magazineChars.
  // If it is, we remove the character from magazineChars.
  // If it isn't, we return false.

  const magazineChars = magazine.split("");
  for (let i = 0; i < ransomNote.length; i++) {
    const index = magazineChars.indexOf(ransomNote[i]);
    if (index === -1) return false;
    magazineChars.splice(index, 1);
  }

  return true;
}
