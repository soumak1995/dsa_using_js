// Problem: Given a string, return the longest palindromic substring.
// Implement `longestPalindrome(s)` to find that substring.
function longestPalindrome(s) {
    if (s.length <= 1) return s;

    let start = 0;
    let maxLen = 1;

    function expand(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > maxLen) {
                maxLen = right - left + 1;
                start = left;
            }
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        expand(i, i);       // odd length
        expand(i, i + 1);   // even length
    }

    return s.substring(start, start + maxLen);
}

// Complexity
// Metric	Value
// Time	O(n²)
// Space	O(1)