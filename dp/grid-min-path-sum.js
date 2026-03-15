// Minimum Path Sum in Grid | DP on Grid

// Problem:
// Minimum Path Sum

// 🧠 Problem Statement

// You’re given an m x n grid of non-negative integers.

// Start at (0,0)

// End at (m-1,n-1)

// Move only:

// ➡ Right

// ⬇ Down

// 👉 Find the minimum sum along a path from start to end.

// 🔹 Example
// grid = [
//   [1, 3, 1],
//   [1, 5, 1],
//   [4, 2, 1]
// ]


// Best path: 1 → 3 → 1 → 1 → 1
// Output → 7

// 🧠 DP Intuition

// To reach cell (i, j) you must come from:

// Top (i-1, j)

// Left (i, j-1)

// So choose the minimum:

// dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])

// 🔹 DP State
// dp[i][j] = minimum path sum to reach cell (i, j)

// 🚀 Approach 1: Memoization (Top-Down DP)
// Base Cases

// Out of bounds → Infinity

// Start cell (0,0) → grid[0][0]

//Code (JS)
function minPathSum(grid) {
    const m = grid.length;
    const n = grid[0].length;

    const dp = Array.from({ length: m },
        () => Array(n).fill(-1)
    );

    function solve(i, j) {
        if (i < 0 || j < 0) return Infinity;
        if (i === 0 && j === 0) return grid[0][0];

        if (dp[i][j] !== -1) return dp[i][j];

        const up = solve(i - 1, j);
        const left = solve(i, j - 1);

        return dp[i][j] = grid[i][j] + Math.min(up, left);
    }

    return solve(m - 1, n - 1);
}

// ⏱ Complexity

// Time → O(m × n)

// Space → O(m × n) (DP + recursion stack)

// 🚀 Approach 2: Tabulation (Bottom-Up DP)
function minPathSum(grid) {
    const m = grid.length;
    const n = grid[0].length;

    const dp = Array.from({ length: m },
        () => Array(n).fill(0)
    );

    dp[0][0] = grid[0][0];

    // First column
    for (let i = 1; i < m; i++) {
        dp[i][0] = grid[i][0] + dp[i - 1][0];
    }

    // First row
    for (let j = 1; j < n; j++) {
        dp[0][j] = grid[0][j] + dp[0][j - 1];
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] =
                grid[i][j] +
                Math.min(dp[i - 1][j], dp[i][j - 1]);
        }
    }

    return dp[m - 1][n - 1];
}

// ⚡ Approach 3: Space Optimized (1D DP)
function minPathSum(grid) {
    const m = grid.length;
    const n = grid[0].length;

    let dp = Array(n).fill(0);

    dp[0] = grid[0][0];

    // First row
    for (let j = 1; j < n; j++) {
        dp[j] = grid[0][j] + dp[j - 1];
    }

    for (let i = 1; i < m; i++) {
        dp[0] = grid[i][0] + dp[0]; // first column
        for (let j = 1; j < n; j++) {
            dp[j] = grid[i][j] + Math.min(dp[j], dp[j - 1]);
        }
    }

    return dp[n - 1];
}

// 🧠 Why 1D DP Works

// dp[j] → value from top (i-1, j)

// dp[j-1] → value from left (i, j-1)

// Update left → right to preserve correctness

// 🎯 Key Takeaways

// Same grid DP pattern as Unique Paths

// Replace + with min

// Use Infinity for invalid paths

// Very common interview question

// 🧩 Related Problems

// Unique Paths / Unique Paths II

// Triangle Minimum Path Sum

// Dungeon Game (advanced)

// Falling Path Sum

// If you want next, I can:

// 🔥 Add obstacles to this problem

// 🔥 Do a full DP table dry run

// 🔥 Show why greedy fails

// 🔥 Compare min path vs count path