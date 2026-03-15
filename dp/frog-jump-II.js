// Problem: Given `heights` and max jump `k`, compute min energy to reach end.
// Implement `frogJumpK(heights, k)` returning minimum total energy.
function frogJumpK(heights, k) {
    const n = heights.length;
    const dp = Array(n).fill(-1);

    function solve(i) {
        if (i === 0) return 0;

        if (dp[i] !== -1) return dp[i];

        let minEnergy = Infinity;

        for (let j = 1; j <= k; j++) {
            if (i - j >= 0) {
                const jumpCost =
                    solve(i - j) +
                    Math.abs(heights[i] - heights[i - j]);

                minEnergy = Math.min(minEnergy, jumpCost);
            }
        }

        return dp[i] = minEnergy;
    }

    return solve(n - 1);
}

// Complexity
// Time → O(n × k)
// Space → O(n)