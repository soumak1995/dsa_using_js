// Problem: Find the majority element appearing more than ⌊n/2⌋ times using Boyer–Moore.
// Implement `majorityElement(nums)` returning the majority candidate.
function majorityElement(nums) {
    let count = 0;
    let candidate = null;
  
    for (let num of nums) {
      if (count === 0) {
        candidate = num;
      }
  
      count += (num === candidate) ? 1 : -1;
    }
  
    return candidate;
  }


// Complexity
// Time: O(n)
// Space: O(1)