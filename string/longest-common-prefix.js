// Problem: Find the longest common prefix string among an array of strings.
// Implement `longestCommonPrefix(strs)` returning the common prefix.
function longestCommonPrefix(strs) {
    if (!strs.length) return "";

    for (let i = 0; i < strs[0].length; i++) {
        const ch = strs[0][i];

        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== ch) {
                return strs[0].slice(0, i);
            }
        }
    }
    return strs[0];
}

// Metric	Value
// Time	O(n × m)
// Space	O(1)

// strs = ["flower", "flow", "flight"]

// i = 0 → 'f' ✓
// i = 1 → 'l' ✓
// i = 2 → 'o' ✗ ('o' ≠ 'i')

// Answer = "fl"