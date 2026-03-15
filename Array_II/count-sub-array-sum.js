// Count Subarrays With Given Sum (JavaScript)
// This is a very important prefix-sum + hashmap problem.


// Complexity
// Metric	Value
// Time	O(n)
// Space	O(n)

function countSubarrays(nums, k) {
    const map = new Map();
    map.set(0, 1); // base case

    let sum = 0;
    let count = 0;
    for (let num of nums) {
        sum += num;

        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }
        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
}