//Time: O(V + E)
//Space: O(V)
  
  
  //BFS for connected Graph
function bfsTraversal(graph, start) {
    const visited = new Set();
    const queue = [];
  
    visited.add(start);
    queue.push(start);
  
    while (queue.length > 0) {
      const node = queue.shift(); // dequeue
      console.log(node);
  
      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }
  
  //BFS for Disconnected Graph

  function bfsDisconnected(graph) {
    const visited = new Set();
  
    for (const start in graph) {
      if (visited.has(start)) continue;
  
      const queue = [start];
      visited.add(start);
  
      while (queue.length) {
        const node = queue.shift();
        console.log(node);
  
        for (const neighbor of graph[node]) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
        }
      }
    }
  }
  

  const graph = {
    0: [1, 2],
    1: [0, 3, 4],
    2: [0],
    3: [1],
    4: [1]
  };
  bfsTraversal(graph, 0);