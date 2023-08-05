// Graph class to represent the graph
class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(node) {
    this.adjacencyList.set(node, []);
  }

  addEdge(node1, node2) {
    this.adjacencyList.get(node1).push(node2);
    this.adjacencyList.get(node2).push(node1); // For an undirected graph
  }

  // BFS function to find the shortest path between two nodes
  bfs(startNode, targetNode) {
    if (!this.adjacencyList.has(startNode) || !this.adjacencyList.has(targetNode)) {
      return null; // Nodes not found in the graph
    }

    const queue = [startNode];
    const visited = new Set();
    const predecessor = new Map();

    visited.add(startNode);

    while (queue.length > 0) {
      const current = queue.shift();

      if (current === targetNode) {
        return this.reconstructPath(predecessor, startNode, targetNode);
      }

      for (const neighbor of this.adjacencyList.get(current)) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
          visited.add(neighbor);
          predecessor.set(neighbor, current);
        }
      }
    }

    return null; // No path found between the nodes
  }

  // Helper function to reconstruct the path from the start node to the target node
  reconstructPath(predecessor, startNode, targetNode) {
    const path = [targetNode];
    let current = targetNode;

    while (current !== startNode) {
      current = predecessor.get(current);
      path.unshift(current);
    }

    return path;
  }
}

// Example usage:
const graph = new Graph();

graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");

const shortestPath = graph.bfs("A", "E");
console.log("Shortest Path:", shortestPath);
