// Leetcode: https://leetcode.com/problems/valid-anagram/
// Description: Given two strings s and t, write a function to determine if t is an anagram of s.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let chars = {};
  for (let i = 0; i < s.length; i++) {
    chars[s[i]] = chars[s[i]] + 1 || 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (chars[t[i]]) {
      chars[t[i]] = chars[t[i]] - 1;
    }
  }

  for (let char in chars) {
    if (chars[char] !== 0) {
      return false;
    }
  }
  return true;
}
