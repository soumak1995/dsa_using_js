// Problem: Given string `s` and integer `k`, return length of longest substring with at most `k` distinct chars.
// Implement `longestAtMostK(arr, k)` to compute this using a sliding window.
function longestAtMostK(arr, k) {
    let left = 0;
    let map = new Map();
    let maxLen = 0;

    for (let right = 0; right < arr.length; right++) {
        map.set(arr[right], (map.get(arr[right]) || 0) + 1);

        if (map.size > k) {
            map.set(arr[left], map.get(arr[left]) - 1);
            if (map.get(arr[left]) === 0) map.delete(arr[left]);
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}
