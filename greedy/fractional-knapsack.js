// Problem: Given values, weights and capacity W, maximize value (fractional allowed).
// Implement `fractionalKnapsack(values, weights, W)` returning the max value.
function fractionalKnapsack(values, weights, W) {
    const n = values.length;

    // Step 1: create items with ratio
    const items = [];
    for (let i = 0; i < n; i++) {
        items.push({
            value: values[i],
            weight: weights[i],
            ratio: values[i] / weights[i]
        });
    }

    // Step 2: sort by ratio descending
    items.sort((a, b) => b.ratio - a.ratio);

    let totalValue = 0;
    let remainingCapacity = W;

    // Step 3: pick items
    for (let item of items) {
        if (remainingCapacity === 0) break;

        if (item.weight <= remainingCapacity) {
            // take full item
            totalValue += item.value;
            remainingCapacity -= item.weight;
        } else {
            // take fraction
            totalValue += item.ratio * remainingCapacity;
            remainingCapacity = 0;
        }
    }

    return totalValue;
}

// Values  = [60, 100, 120]
// Weights = [10, 20, 30]
// Capacity W = 50

// Step	Complexity
// Sorting	O(N log N)
// Traversal	O(N)
// Total	O(N log N)