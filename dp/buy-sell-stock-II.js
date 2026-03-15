// Buy and Sell Stock – II (Unlimited Transactions)
// 🔷 Problem Statement

// You are given an array prices where:

// prices[i] = stock price on day i

// You can buy and sell multiple times

// ❌ You cannot hold more than one stock at a time

// 👉 Maximize total profit.

// 🔷 Example
// prices = [7,1,5,3,6,4]
// Output
// 7
// Explanation

// Buy at 1, sell at 5 → profit = 4

// Buy at 3, sell at 6 → profit = 3
// ✅ Total = 7

// 🧠 Key Insight (MOST IMPORTANT)

// Whenever there is a profit opportunity, take it.

// In this problem:

// You are allowed unlimited transactions

// So you don’t need to find global min & max

// Just collect all upward price movements

// 🔑 Greedy Idea (Why It Works)

// If:

// price[i] > price[i-1]

// Then:

// profit += price[i] - price[i-1]
// Why is this valid?

// Because this:

// Buy at 1 → Sell at 5 (profit = 4)

// Is the SAME as:

// (1 → 2) + (2 → 3) + (3 → 4) + (4 → 5)

// 👉 Profit is additive.

// 🔍 Visual Explanation
// Prices:  1   5   3   6
//          ↑───↑       ↑───↑
// Profit:     +4           +3

// We sum every rise.

// 🔷 Step-by-Step Algorithm

// Initialize profit = 0

// Traverse prices from day 1

// If today’s price > yesterday’s price:

// Add difference to profit

// ✅ JavaScript Solution (Adobe Ready)
function maxProfit(prices) {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }

  return profit;
}
// 🔍 Dry Run
// prices = [7,1,5,3,6,4]
// Day	Price	Action	Profit
// 1	1	buy	0
// 2	5	sell	+4
// 3	3	buy	4
// 4	6	sell	+3
// 			7
// ⏱️ Complexity

// Time: O(n)

// Space: O(1)

// ❗ Common Interview Traps

// ❌ Trying DP unnecessarily
// ❌ Looking for max-min only
// ❌ Overcomplicating with transactions tracking

// 🎯 Interview One-Liner (Say This)

// “Since unlimited transactions are allowed, I add all positive price differences between consecutive days to maximize profit.”

// 🧠 Memory Trick

// Every upward slope = profit

// If you want next:

// Buy & Sell Stock – I (single transaction)

// Buy & Sell Stock – III (2 transactions)

// Buy & Sell Stock with cooldown

// DP explanation for all stock problems

// Just tell me 👍