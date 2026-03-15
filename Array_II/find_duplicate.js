function findDuplicate(nums) {
    let xor = 0;
  
    // XOR all elements in array
    for (let num of nums) {
      xor ^= num;
    }
  
    // XOR numbers from 1 to n
    for (let i = 1; i < nums.length; i++) {
      xor ^= i;
    }
  
    return xor;
  }
  
// Find the duplicate in an array of N + 1 integers

  function findDuplicate(nums) {
    let slow = nums[0]
    let fast = nums[0]
  
    // Phase 1: detect cycle
    do {
      slow = nums[slow]
      fast = nums[nums[fast]]
    } while (slow !== fast)
  
    // Phase 2: find entry of cycle
    slow = nums[0]
    while (slow !== fast) {
      slow = nums[slow]
      fast = nums[fast]
    }
  
    return slow
  }
  