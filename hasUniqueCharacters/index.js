// Description: Implement an algorithm to determine if a string has all unique characters.
// What if you cannod use additional data structures

// Time: O(N)
// Space: O(N)
// N is the length of the string
function hasUniqueCharacters(s) {
  const seen = [];
  for (let char of s) {
    if (seen.indexOf(char) >= 0) {
      // Checks if current char is in our seen array
      return false;
    }
    seen.push(char);
  }
  return true;
}

// Time: O(Nlog(N))
// Space: O(1)

function hasUniqueCharactersOptimal(s) {
  const sorted = s
    .split("")
    .sort()
    .join("");

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i - 1]) {
      // Since s is sorted we check for any repeating characters
      return false;
    }
  }
  return true;
}

const test1 = "abcdefghi"; // True
const test2 = "jklpoiuqwerzxcvmnsadf"; // True
const test3 = "abcadef"; // False
const test4 = "1234567890asdklf1"; // False

console.log(hasUniqueCharacters(test1));
console.log(hasUniqueCharacters(test2));
console.log(hasUniqueCharacters(test3));
console.log(hasUniqueCharacters(test4));

console.log(hasUniqueCharactersOptimal(test1));
console.log(hasUniqueCharactersOptimal(test2));
console.log(hasUniqueCharactersOptimal(test3));
console.log(hasUniqueCharactersOptimal(test4));
