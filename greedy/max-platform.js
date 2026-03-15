// Problem: Given arrival and departure times, find minimum number of platforms required.
// Implement `minimumPlatforms(arr, dep)` returning the max concurrent trains.
function minimumPlatforms(arr, dep) {
    const n = arr.length;

    // Sort both arrays
    arr.sort((a, b) => a - b);
    dep.sort((a, b) => a - b);

    let platforms = 1;
    let maxPlatforms = 1;

    let i = 1; // arrival pointer
    let j = 0; // departure pointer

    while (i < n && j < n) {
        if (arr[i] <= dep[j]) {
            platforms++;     // new train arrives
            maxPlatforms = Math.max(maxPlatforms, platforms);
            i++;
        } else {
            platforms--;     // train departs
            j++;
        }
    }

    return maxPlatforms;
}

arr = [900, 940, 950, 1100, 1500, 1800]
dep = [910, 1200, 1120, 1130, 1900, 2000]

// Complexity
// Step	Complexity
// Sorting	O(n log n)
// Traversal	O(n)
// Total	O(n log n)

// Space → O(1) (ignoring sort space)