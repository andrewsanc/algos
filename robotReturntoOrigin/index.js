//  Leetcode: 
//  Description: There is a robot starting at position (0, 0), the origin, on a 2D plane. 
//  Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

//  The move sequence is represented by a string, and the character moves[i] represents its ith move. 
//  Valid moves are R (right), L (left), U (up), and D (down). If the robot returns to the origin after it finishes all of its moves, 
//  return true. Otherwise, return false.

// Example 1:
// Input: "UD"
// Output: true 
// Explanation: The robot moves up once, and then down once. All moves have the same magnitude, 
// so it ended up at the origin where it started. Therefore, we return true.

function judgeCircle(moves) {
  let x = 0;
  let y = 0;
  const path = moves.split('');

  for (let move of path) {
    if (move === 'U') y++;
    else if (move === 'D') y--;
    else if (move === 'R') x++;
    else x--;
  }
  return x === 0 && y === 0 ? true : false;
}
