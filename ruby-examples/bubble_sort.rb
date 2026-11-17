# frozen_string_literal: true

def bubble_sort(array)
  k = array.size
  while k >= 0
    array.each_with_index do |current_number, index|
      next if index >= k

      second_number = array[index + 1]
      unless second_number.nil? # unless end of an array, so second_number becomes nil. # rubocop:disable Style/Next
        if current_number > second_number # rubocop:disable Style/SoleNestedConditional
          swap_number = current_number
          array[index] = array[index + 1]
          array[index + 1] = swap_number
        end
      end
    end
    k -= 1
  end
  array
end

original_array = [1, 87, 45, 72, 23, 12, 5, 0]
print 'Original array: '
p original_array
puts "Sorted array: #{bubble_sort(original_array)}"
