// Problem: Given binary array `nums` and integer `k`, flip up to `k` zeros to maximize consecutive 1s.
// Implement `longestOnes(nums, k)` returning the maximum length.
function longestOnes(nums, k) {
    let left = 0;
    let zeroCount = 0;
   let maxLength = 0;
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) zeroCount++;

        if (zeroCount > k) {
            if (nums[left] === 0) zeroCount--;
            left++;
        }
        if(zeroCount <= k) maxLength = Math.max(maxLength,right - left + 1)
    }

    return maxLength
}

