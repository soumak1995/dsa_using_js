// Problem: Given two sorted arrays, return their intersection (unique common elements).
// Implement `intersectionSortedArrays(arr1, arr2)` returning a sorted array of common unique elements.
function intersectionSortedArrays(arr1, arr2) {
    let i = 0, j = 0;
    const result = [];
  
    while (i < arr1.length && j < arr2.length) {
  
      // Skip duplicates in arr1
      if (i > 0 && arr1[i] === arr1[i - 1]) {
        i++;
        continue;
      }
  
      // Skip duplicates in arr2
      if (j > 0 && arr2[j] === arr2[j - 1]) {
        j++;
        continue;
      }
  
      if (arr1[i] < arr2[j]) {
        i++;
      } 
      else if (arr1[i] > arr2[j]) {
        j++;
      } 
      else {
        result.push(arr1[i]);
        i++;
        j++;
      }
    }
  
    return result;
  }


// Time: O(n + m)
// Space: O(1) (excluding output)