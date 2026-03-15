// Problem: Given an array of integers, return the maximum sum with no two chosen adjacent.
// Implement `maxSum(arr)` to compute that maximum sum.

//Given an array of integers, return the maximum sum such that no two selected elements are adjacent.

function maxSum(arr) {
    const n = arr.length;
    const dp = Array(n).fill(-1);

    function solve(i) {
        if (i < 0) return 0;
        if (i === 0) return arr[0];

        if (dp[i] !== -1) return dp[i];

        const pick = arr[i] + solve(i - 2);
        const notPick = solve(i - 1);

        return dp[i] = Math.max(pick, notPick);
    }

    return solve(n - 1);
}


// Time → O(n)
// ✅ Space → O(n)