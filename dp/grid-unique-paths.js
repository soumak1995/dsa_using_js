// Complexity
// Time: O(m × n)
// (each cell computed once)
// Space: O(m × n)
// (DP array + recursion stack)

// Problem: Count unique paths in an m x n grid moving only right or down.
// Implement `uniquePaths(m, n)` returning the number of paths.
function uniquePaths(m, n) {
    const dp = Array.from({ length: m },
        () => Array(n).fill(-1)
    );

    function solve(i, j) {
        // Out of bounds
        if (i < 0 || j < 0) return 0;

        // Start cell
        if (i === 0 && j === 0) return 1;

        // Already computed
        if (dp[i][j] !== -1) return dp[i][j];

        const up = solve(i - 1, j);
        const left = solve(i, j - 1);

        return dp[i][j] = up + left;
    }

    return solve(m - 1, n - 1);
}

//Approach 2: Space Optimized (1D DP)
function uniquePaths(m, n) {
    let dp = Array(n).fill(1);

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[j] = dp[j] + dp[j - 1];
        }
    }

    return dp[n - 1];
}

//🚀 Approach 1: Tabulation (2D DP)
function uniquePaths(m, n) {
    const dp = Array.from({ length: m },
        () => Array(n).fill(0)
    );

    // Base cases
    for (let i = 0; i < m; i++) dp[i][0] = 1;
    for (let j = 0; j < n; j++) dp[0][j] = 1;

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1];
}

// | Approach | Time     | Space    |
// | -------- | -------- | -------- |
// | 2D DP    | O(m × n) | O(m × n) |
// | 1D DP    | O(m × n) | O(n)     |
