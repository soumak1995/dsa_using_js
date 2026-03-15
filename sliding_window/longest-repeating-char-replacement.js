// Problem: Given a string `s` and integer `k`, replace up to `k` chars to maximize a repeating-character substring.
// Implement `characterReplacement(s, k)` returning the maximum substring length after replacements.

function characterReplacement(s, k) {
    let left = 0;
    let maxFreq = 0;
    let maxLength = 0;
    let map = new Map();

    for (let right = 0; right < s.length; right++) {
        map.set(s[right], (map.get(s[right]) || 0) + 1);

        maxFreq = Math.max(maxFreq, map.get(s[right]));

        if ((right - left + 1) - maxFreq > k) {
            map.set(s[left], map.get(s[left]) - 1);
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}
