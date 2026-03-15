// 🧱 Unique Paths II | DP on Grid with Maze Obstacles
// Problem:
// Unique Paths II
// This is Grid DP + Obstacles, a very important extension of Unique Paths.
// 🧠 Problem Statement
// You are given an m x n grid:

// 0 → free cell

// 1 → obstacle (blocked cell ❌)

// Rules:

// Start at (0,0)

// End at (m-1,n-1)

// You can move only:

// ➡ Right

// ⬇ Down

// You cannot pass through obstacles

// Return the number of unique paths.

// 🔹 Example
// const obstacleGrid = [
//   [0, 0, 0],
//   [0, 1, 0],
//   [0, 0, 0]
// ];


// Output → 2

// 🧠 DP Intuition

// From any cell (i, j):

// If it’s an obstacle → 0 paths

// Else → sum of paths from:

// Top (i-1, j)

// Left (i, j-1)

// 🔹 DP State
// dp[i][j] = number of unique paths to reach (i, j)

// 🔹 Transition
// if obstacleGrid[i][j] == 1:
//     dp[i][j] = 0
// else:
//     dp[i][j] = dp[i-1][j] + dp[i][j-1]

// 🚀 Memoization (Top-Down DP)
// 🛑 Base Cases

// Out of bounds → 0

// Obstacle → 0

// Start cell (0,0) → 1

// ✅ Code (JavaScript)
function uniquePathsWithObstacles(grid) {
    const m = grid.length;
    const n = grid[0].length;

    const dp = Array.from({ length: m },
        () => Array(n).fill(-1)
    );

    function solve(i, j) {
        // Out of bounds
        if (i < 0 || j < 0) return 0;

        // Obstacle
        if (grid[i][j] === 1) return 0;

        // Start
        if (i === 0 && j === 0) return 1;

        if (dp[i][j] !== -1) return dp[i][j];

        return dp[i][j] =
            solve(i - 1, j) + solve(i, j - 1);
    }

    return solve(m - 1, n - 1);
}

// 🚀 Tabulation (Bottom-Up DP)
function uniquePathsWithObstacles(grid) {
    const m = grid.length;
    const n = grid[0].length;

    const dp = Array.from({ length: m },
        () => Array(n).fill(0)
    );

    // Start cell
    if (grid[0][0] === 1) return 0;
    dp[0][0] = 1;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {

            if (grid[i][j] === 1) {
                dp[i][j] = 0;
            } else {
                if (i > 0) dp[i][j] += dp[i - 1][j];
                if (j > 0) dp[i][j] += dp[i][j - 1];
            }
        }
    }

    return dp[m - 1][n - 1];
}

// ⚡ Space Optimized (1D DP)
function uniquePathsWithObstacles(grid) {
    const m = grid.length;
    const n = grid[0].length;

    let dp = Array(n).fill(0);
    dp[0] = grid[0][0] === 1 ? 0 : 1;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                dp[j] = 0;
            } else if (j > 0) {
                dp[j] += dp[j - 1];
            }
        }
    }

    return dp[n - 1];
}

// ⏱ Complexity
// Approach	Time	Space
// Memoization	O(m × n)	O(m × n)
// Tabulation	O(m × n)	O(m × n)
// Optimized	O(m × n)	O(n)
// 🧠 Key Takeaways
// Obstacles turn some DP cells into 0
// Same grid DP pattern, just blocked transitions
// Foundation for:
// Minimum Path Sum with obstacles
// Maze path counting
// Robot grid problems
// 🎯 Interview One-Liner
// “If a cell is blocked, paths are zero; otherwise, paths equal top plus left.”
// If you want next, I can:
// 🔥 Show dry run with DP table
// 🔥 Add diagonal moves
// 🔥 Convert to minimum path cost
// 🔥 Compare Unique Paths vs Unique Paths II
// Just tell me 👍