function setZeroes(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    let firstRowZero = false;
    let firstColZero = false;
  
    // Step 1: Check first column
    for (let i = 0; i < rows; i++) {
      if (matrix[i][0] === 0) {
        firstColZero = true;
        break;
      }
    }
  
    // Step 2: Check first row
    for (let j = 0; j < cols; j++) {
      if (matrix[0][j] === 0) {
        firstRowZero = true;
        break;
      }
    }
  
    // Step 3: Use first row & col as markers
    for (let i = 1; i < rows; i++) {
      for (let j = 1; j < cols; j++) {
        if (matrix[i][j] === 0) {
          matrix[i][0] = 0;
          matrix[0][j] = 0;
        }
      }
    }
  
    // Step 4: Zero rows
    for (let i = 1; i < rows; i++) {
      if (matrix[i][0] === 0) {
        for (let j = 1; j < cols; j++) {
          matrix[i][j] = 0;
        }
      }
    }
  
    // Step 5: Zero columns
    for (let j = 1; j < cols; j++) {
      if (matrix[0][j] === 0) {
        for (let i = 1; i < rows; i++) {
          matrix[i][j] = 0;
        }
      }
    }
  
    // Step 6: Handle first row
    if (firstRowZero) {
      for (let j = 0; j < cols; j++) {
        matrix[0][j] = 0;
      }
    }
  
    // Step 7: Handle first column
    if (firstColZero) {
      for (let i = 0; i < rows; i++) {
        matrix[i][0] = 0;
      }
    }
  }
  
//Time: O(m × n)
//Space: O(1) (in-place)