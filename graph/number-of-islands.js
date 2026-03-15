function numIslands(grid) {
    if (!grid || grid.length === 0) return 0;
  
    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;
  
    function dfs(r, c) {
      // boundary + water check
      if (
        r < 0 || c < 0 ||
        r >= rows || c >= cols ||
        grid[r][c] === '0'
      ) return;
  
      // mark visited
      grid[r][c] = '0';
  
      dfs(r + 1, c);
      dfs(r - 1, c);
      dfs(r, c + 1);
      dfs(r, c - 1);
    }
  
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (grid[r][c] === '1') {
          count++;
          dfs(r, c);
        }
      }
    }
  
    return count;
  }
  
  const grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ];
  
  console.log(numIslands(grid)); // 3
  //-----------------------------------------------------------------------------//

  function numIslandsBFS(grid) {
    if (!grid || grid.length === 0) return 0;
  
    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;
  
    const directions = [[1,0],[-1,0],[0,1],[0,-1]];
  
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (grid[r][c] === '1') {
          count++;
          grid[r][c] = '0';
  
          const queue = [[r, c]];
  
          while (queue.length) {
            const [x, y] = queue.shift();
  
            for (const [dx, dy] of directions) {
              const nx = x + dx;
              const ny = y + dy;
  
              if (
                nx >= 0 && ny >= 0 &&
                nx < rows && ny < cols &&
                grid[nx][ny] === '1'
              ) {
                grid[nx][ny] = '0';
                queue.push([nx, ny]);
              }
            }
          }
        }
      }
    }
  
    return count;
  }
  