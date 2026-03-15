// Problem: Count distinct ways to climb `n` stairs (1 or 2 steps at a time).
// Implement `climbStairs(n)` returning the number of ways.
function climbStairs(n) {
    const dp = Array(n + 1).fill(-1);

    function solve(i) {
        if (i === 0 || i === 1) return 1;

        if (dp[i] !== -1) return dp[i];

        return dp[i] = solve(i - 1) + solve(i - 2);
    }

    return solve(n);
}
