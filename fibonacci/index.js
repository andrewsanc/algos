// Leetcode: https://leetcode.com/problems/fibonacci-number/
// Description: The Fibonacci numbers, commonly denoted F(n) form a sequence, 
// called the Fibonacci sequence, such that each number is the sum of the 
// two preceding ones, starting from 0 and 1. That is,
// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), for N > 1.

// Given N, calculate F(N).

// Example 1:
// Input: 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

function fib(N) { // Basic Recursion
  if (N < 2) {
    return N;
  }
  return fib(N-1) + fib(N-2);
}

function fibWithTab(N) { // Fib with tabulation
  let tab = [0,1];
  for (let i=2; i<=N; i++) {
      tab.push(tab[i-1] + tab[i-2]);
  }
  return tab[N];
}
