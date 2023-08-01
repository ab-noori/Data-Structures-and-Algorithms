def array_of_array_products(arr)
  product = []

  return product if arr.length == 0 || arr.length == 1

  arr.each_index do |i|
    prod = 1
    arr.each_index do |j|
      prod *= arr[j] unless i == j
    end
    product[i] = prod
  end

  product
end

result = array_of_array_products([1, 2, 3, 4])
puts result.inspect
