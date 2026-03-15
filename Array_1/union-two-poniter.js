// Problem: Given two sorted arrays, return their union (unique elements sorted).
// Implement `unionSortedArrays(arr1, arr2)` returning a sorted array of unique elements present in either array.
function unionSortedArrays(arr1, arr2) {
    let i = 0, j = 0;
    const union = [];
  
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
        union.push(arr1[i]);
        i++;
      } 
      else if (arr1[i] > arr2[j]) {
        union.push(arr2[j]);
        j++;
      } 
      else {
        union.push(arr1[i]);
        i++;
        j++;
      }
    }
  
    // Remaining elements
    while (i < arr1.length) {
      if (i === 0 || arr1[i] !== arr1[i - 1]) {
        union.push(arr1[i]);
      }
      i++;
    }
  
    while (j < arr2.length) {
      if (j === 0 || arr2[j] !== arr2[j - 1]) {
        union.push(arr2[j]);
      }
      j++;
    }
  
    return union;
  }

// Time: O(n + m)
// Space: O(n + m) (output only)