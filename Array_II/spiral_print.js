function spiralPrint(matrix) {
    if (matrix.length === 0) return [];
  
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
  
    const result = [];
  
    while (top <= bottom && left <= right) {
  
      // 1. Top row
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i]);
      }
      top++;
  
      // 2. Right column
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
      }
      right--;
  
      // 3. Bottom row
      if (top <= bottom) {
        for (let i = right; i >= left; i--) {
          result.push(matrix[bottom][i]);
        }
        bottom--;
      }
  
      // 4. Left column
      if (left <= right) {
        for (let i = bottom; i >= top; i--) {
          result.push(matrix[i][left]);
        }
        left++;
      }
    }
  
    return result;
  }

//   Input - > [
//     [1,  2,  3,  4],
//     [5,  6,  7,  8],
//     [9, 10, 11, 12]
//   ]

//   Output -> [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]