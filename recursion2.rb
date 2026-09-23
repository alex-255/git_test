arr = [1, 2, 3, [5, 6, [8, 9, 10], 7], 11, [12, 13], 14, 15]

def go_through_arr(array, current_index = 0, level = 1)
  # if last item:
  # - if not array show item
  # - if array start function
  
  # if not last item:
  # - if not array start function with index + 1
  # - if array start function

  if current_index == (array.size - 1)
    if array[current_index].is_a?(Array) == false
      print dashes(level)
      puts array[current_index]
    else
      go_through_arr(array[current_index], 0, level + 1)
    end
  else
    if array[current_index].is_a?(Array) == false
      print dashes(level)
      puts array[current_index]
      go_through_arr(array, current_index + 1, level)
    else
      go_through_arr(array[current_index], 0, level + 1)
      go_through_arr(array, current_index + 1, level)
    end
  end
end

def dashes(level)
  dashes = ""
  level.times {dashes += "-"}
  dashes
end

go_through_arr(arr)