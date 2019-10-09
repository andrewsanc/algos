# Leetcode: https://leetcode.com/problems/sort-array-by-parity/
# Description: Given an array A of non-negative integers, return 
# an array consisting of all the even elements of A, followed by 
# all the odd elements of A.
# You may return any answer array that satisfies this condition.

# Example 1:
# Input: [3,1,2,4]
# Output: [2,4,3,1]
# The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

def sortArrayByParity(A: list[int]) -> List[int]:
  nextEven, nextOdd = 0, len(A)-1
  while nextEven < nextOdd:
    if A[nextEven] % 2 == 0:
      nextEven += 1
    else:
      A[nextEven], A[nextOdd] = A[nextOdd], A[nextEven]
      nextOdd -= 1
  return A