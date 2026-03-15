// Problem: Reverse every word in a string (words separated by spaces).
// Implement a function that returns the input string with each word reversed.
// Complexity

// Time: O(n)

// Space: O(n)

function reverseEveryWord(str) {
    return str
        .split(" ")
        .map(word => word.split("").reverse().join(""))
        .join(" ");
}

// Example
console.log(reverseEveryWord("Hello World from JavaScript"));


//Approach 2: Without split() (Two Pointers)

function reverseEveryWord(str) {
    let result = "";
    let word = "";

    for (let ch of str) {
        if (ch === " ") {
            result += word.split("").reverse().join("") + " ";
            word = "";
        } else {
            word += ch;
        }
    }

    // reverse last word
    result += word.split("").reverse().join("");
    return result;
}

console.log(reverseEveryWord("Hello World from JavaScript"));


//Approach 3: In-place Logic (Char Array)
function reverseEveryWord(str) {
    const arr = str.split("");
    let start = 0;

    for (let i = 0; i <= arr.length; i++) {
        if (i === arr.length || arr[i] === " ") {
            reverse(arr, start, i - 1);
            start = i + 1;
        }
    }
    return arr.join("");
}

function reverse(arr, l, r) {
    while (l < r) {
        [arr[l], arr[r]] = [arr[r], arr[l]];
        l++;
        r--;
    }
}

console.log(reverseEveryWord("Hello World from JavaScript"));