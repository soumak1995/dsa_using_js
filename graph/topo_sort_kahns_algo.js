//Time: O(V + E)
//Space: O(V)

function topoSortBFS(graph) {
    const indegree = {};
    const result = [];
    const queue = [];
  
    // Initialize indegree
    for (const node in graph) {
      indegree[node] = 0;
    }
  
    // Build indegree
    for (const node in graph) {
      for (const neighbor of graph[node]) {
        indegree[neighbor]++;
      }
    }
  
    // Add nodes with indegree 0
    for (const node in indegree) {
      if (indegree[node] === 0) {
        queue.push(node);
      }
    }
  
    while (queue.length) {
      const node = queue.shift();
      result.push(node);
  
      for (const neighbor of graph[node]) {
        indegree[neighbor]--;
        if (indegree[neighbor] === 0) {
          queue.push(neighbor);
        }
      }
    }
  
    // Cycle check
    if (result.length !== Object.keys(graph).length) {
      return "Cycle detected — Topological sort not possible";
    }
  
    return result;
  }
  