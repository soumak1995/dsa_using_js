//BFS-based cycle detection for an undirected graph in JavaScript
function hasCycleBFS(graph) {
    const visited = new Set();
  
    for (const start in graph) {
      if (visited.has(start)) continue;
  
      const queue = [];
      queue.push([start, null]);
      visited.add(start);
  
      while (queue.length > 0) {
        const [node, parent] = queue.shift();
  
        for (const neighbor of graph[node]) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push([neighbor, node]);
          }
          // Visited and not parent → cycle
          else if (neighbor !== parent) {
            return true;
          }
        }
      }
    }
    return false;
  }
  
  const graph = {
    0: [1, 2],
    1: [0, 2],
    2: [0, 1],
    3: [4],
    4: [3]
  };
  
  console.log(hasCycleBFS(graph)); // true
  
  //Time: O(V + E)
  //Space: O(V)