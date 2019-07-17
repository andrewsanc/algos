//  Leetcode: https://leetcode.com/problems/unique-morse-code-words/
//  Description: International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes,
//  as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.
//  For convenience, the full table for the 26 letters of the English alphabet is given below:
//  [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

//  Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. 
//  For example, "cba" can be written as "-.-..--...", (which is the concatenation "-.-." + "-..." + ".-"). 
//  We'll call such a concatenation, the transformation of a word.

// Example:
// Input: words = ["gin", "zen", "gig", "msg"]
// Output: 2
// Explanation: 
// The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."

// There are 2 different transformations, "--...-." and "--...--.".

function uniqueMorseRepresentations(words) {
  const morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..",
                     "--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-",
                     "-.--","--.."]
  let results = []    
  for (let word of words) {
      let charWord = word.split('').map(char => char.charCodeAt()-97);
      let result = charWord.map(char => morseCode[char]).join('');
      if (results.indexOf(result) === -1) {
        results.push(result);
    }
  }
  return results.length;
}