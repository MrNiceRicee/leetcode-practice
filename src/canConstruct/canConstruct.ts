export function canConstruct(ransomNote: string, magazine: string): boolean {
  if (!ransomNote) return false;
  let isPossible = true;
  for (let i = 0; i < ransomNote.length || !isPossible; i++) {
      isPossible = magazine.includes(ransomNote[i]);
  }
  return isPossible;
};

function test() {
  const ransomNote = "aa";
  const magazine = "aab";
  const results = canConstruct(ransomNote, magazine);
  console.log(results);
}