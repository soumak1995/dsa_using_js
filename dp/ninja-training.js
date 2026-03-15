// Problem: Given points for tasks per day, maximize points without repeating last task.
// Implement `ninjaTraining(points)` to compute the maximum achievable points.
//This is one of the most important problems to understand 2D DP + Previous State Dependency.
// const points = [
//     [10, 40, 70],  // Day 0
//     [20, 50, 80],  // Day 1
//     [30, 60, 90]   // Day 2
// ];
function ninjaTraining(points) {
    const n = points.length;
    const dp = Array.from({ length: n },
        () => Array(4).fill(-1)
    );

    function solve(day, last) {
        if (dp[day][last] !== -1)
            return dp[day][last];

        if (day === 0) {
            let max = 0;
            for (let task = 0; task < 3; task++) {
                if (task !== last) {
                    max = Math.max(max, points[0][task]);
                }
            }
            return dp[day][last] = max;
        }

        let max = 0;

        for (let task = 0; task < 3; task++) {
            if (task !== last) {
                const activity = points[day][task] +
                    solve(day - 1, task);
                max = Math.max(max, activity);
            }
        }

        return dp[day][last] = max;
    }

    return solve(n - 1, 3);
}

// Time → O(N × 4 × 3) ≈ O(N)
// ✅ Space → O(N × 4)