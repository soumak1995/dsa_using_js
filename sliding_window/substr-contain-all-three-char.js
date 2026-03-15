// Problem:
// Given a string s consisting only of 'a', 'b', and 'c', return the number of substrings containing at least one of each character.

function numberOfSubstrings(s) {
    let left = 0;
    let count = { a: 0, b: 0, c: 0 };
    let result = 0;

    for (let right = 0; right < s.length; right++) {
        count[s[right]]++;

        while (count.a > 0 && count.b > 0 && count.c > 0) {
            result += s.length - right;
            count[s[left]]--;
            left++;
        }
    }

    return result;
}
