// Problem: Given an array of fruit types and 2 baskets, return max fruits picked consecutively.
// Implement `totalFruit(fruits)` returning the maximum number of fruits in a contiguous window with at most 2 types.


function totalFruit(fruits) {
    let left = 0;
    let maxLength = 0;
    let map = new Map();

    for (let right = 0; right < fruits.length; right++) {
        map.set(fruits[right], (map.get(fruits[right]) || 0) + 1);

        while (map.size > 2) {
            map.set(fruits[left], map.get(fruits[left]) - 1);
            if (map.get(fruits[left]) === 0) {
                map.delete(fruits[left]);
            }
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}
