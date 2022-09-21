// isIsomorphic algorithm
// test case 1
// input: s = "egg", t = "add"
// output: true
// test case 2
// input: s = "foo", t = "bar"
// output: false
// test case 3
// input: s = "paper", t = "title"
// output: true

const isIsomorphic = (s: string, t: string): boolean => {
  // base check
  if (s.length !== t.length) {
    return false;
  }

  // s is the key, t is the value

  // create a map to track the mapping
  const map = new Map();
  // create a set to track the mapped values
  const set = new Set();

  // iterate over the string
  for (let i = 0; i < s.length; i++) {
    // if the map has the key and the value is not equal to the current value
    if (map.has(s[i]) && map.get(s[i]) !== t[i]) {
      return false;
    }
    // if the key doesn't exist & the value is already mapped
    if (!map.has(s[i]) && set.has(t[i])) {
      return false;
    }
    // set the key and value
    map.set(s[i], t[i]);
    // add the value to the set
    set.add(t[i]);
  }
  return true;
};

export default isIsomorphic;
