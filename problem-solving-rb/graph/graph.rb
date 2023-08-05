
# Graph class to represent the graph
class Graph
  def initialize
    @adjacency_list = Hash.new { |h, k| h[k] = [] }
  end

  def add_node(node)
    @adjacency_list[node]
  end

  def add_edge(node1, node2)
    @adjacency_list[node1] << node2
    @adjacency_list[node2] << node1 # For an undirected graph
  end

  # BFS function to find the shortest path between two nodes
  def bfs(start_node, target_node)
    return nil unless @adjacency_list.key?(start_node) && @adjacency_list.key?(target_node)

    queue = [start_node]
    visited = Set.new
    predecessor = {}

    visited.add(start_node)

    while queue.any?
      current = queue.shift

      return reconstruct_path(predecessor, start_node, target_node) if current == target_node

      @adjacency_list[current].each do |neighbor|
        next if visited.include?(neighbor)

        queue.push(neighbor)
        visited.add(neighbor)
        predecessor[neighbor] = current
      end
    end

    nil # No path found between the nodes
  end

  # Helper function to reconstruct the path from the start node to the target node
  def reconstruct_path(predecessor, start_node, target_node)
    path = [target_node]
    current = target_node

    while current != start_node
      current = predecessor[current]
      path.unshift(current)
    end

    path
  end
end

# Example usage:
graph = Graph.new

graph.add_node("A")
graph.add_node("B")
graph.add_node("C")
graph.add_node("D")
graph.add_node("E")

graph.add_edge("A", "B")
graph.add_edge("A", "C")
graph.add_edge("B", "D")
graph.add_edge("C", "E")
graph.add_edge("D", "E")

shortest_path = graph.bfs("A", "E")
puts "Shortest Path: #{shortest_path.inspect}"
