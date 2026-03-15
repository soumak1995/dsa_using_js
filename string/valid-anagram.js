// Problem: Given two strings, determine if they are anagrams of each other.
// Implement `isAnagram(s, t)` returning true if `t` is an anagram of `s`.
function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const freq = {};

    for (let ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    for (let ch of t) {
        if (!freq[ch]) return false;
        freq[ch]--;
    }

    return true;
}

// Metric	Value
// Time	O(n)
// Space	O(1) (max 26 letters if lowercase)

// Input:  s = "anagram", t = "nagaram"
// Output: true