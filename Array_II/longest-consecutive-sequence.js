function longestConsecutive(nums) {
    const set = new Set(nums);
    let longest = 0;
  
    for (let num of set) {
      // start of a sequence
      if (!set.has(num - 1)) {
        let currentNum = num;
        let count = 1;
  
        while (set.has(currentNum + 1)) {
          currentNum++;
          count++;
        }
  
        longest = Math.max(longest, count);
      }
    }
  
    return longest;
  }

//   Input -> nums = [100, 4, 200, 1, 3, 2]
//   output: 4   // sequence: [1, 2, 3, 4]

// Complexity
// Time: O(n) (each number visited once)ra
// Space: O(n) (Set)