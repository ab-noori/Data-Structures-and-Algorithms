class Node
	attr_reader :data
	attr_accessor :left, :right
	
	def initialize(data)
		@data = data
	end
end

def array_to_tree(array, i = 0)
  # use your function from the previous challenge
  return nil if i >= array.length || array[i].zero?

  node = Node.new(array[i])
  node.left = array_to_tree(array, 2 * i + 1)
  node.right = array_to_tree(array, 2 * i + 2)

  node
end

def check_bst?(temp, min = nil, max = nil)
  return true if temp.nil?

  if (min && temp.data <= min) || (max && temp.data >= max)
    return false
  end

  left = check_bst?(temp.left, min, temp.data)
  right = check_bst?(temp.right, temp.data, max)

  left && right
end

def search_tree?(array)
  root = array_to_tree(array)
  # write your code here
  check_bst?(root)
end

puts search_tree?([10, 4, 12])
# => true

puts search_tree?([10, 5, 7])
# => false
