//Time: O(n)
//Space: O(1) (in-place)

function nextPermutation(nums) {
    let n = nums.length;
    let i = n - 2;

    // Step 1: Find first decreasing element
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    if (i >= 0) {
        let j = n - 1;

        // Step 2: Find next larger element
        while (nums[j] <= nums[i]) {
            j--;
        }

        // Step 3: Swap
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // Step 4: Reverse the suffix
    reverse(nums, i + 1, n - 1);

    return nums;
}

function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}


nextPermutation([1, 2, 3]); 
// Output: [1, 3, 2]

nextPermutation([3, 2, 1]); 
// Output: [1, 2, 3]

nextPermutation([1, 1, 5]); 
// Output: [1, 5, 1]
