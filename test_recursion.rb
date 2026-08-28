arr = [1, 2, 3, [5,6,[8,9,10],7], 11, [12, 13], 14, 15]

def recursion_trough_arr(current_arr, index = 0, level = 0)
  # if last element in a row
  if index >= current_arr.length - 1

    if current_arr[index].is_a?(Array)
      puts print_dashes(level) + "--" + unicode_symbol("\u25BD") # symbol "corner" for one level deeper
      recursion_trough_arr(current_arr[index], 0, level + 1)
    else
      puts print_dashes(level) + " " + current_arr[index].to_s
    end

  else

    # if not last element in a row
    if current_arr[index].is_a?(Array)
      puts print_dashes(level) + "--" + unicode_symbol("\u25BD") # symbol "corner" for one level deep
      recursion_trough_arr(current_arr[index], 0, level + 1)
      recursion_trough_arr(current_arr, index + 1, level) # calling recursion second time that it continue working till the end of row
    else
      puts print_dashes(level) + " " + current_arr[index].to_s
      recursion_trough_arr(current_arr, index + 1, level)
    end

  end
end

def print_dashes(level) 
  dashes = "-"
  level.times { dashes += "-" }
  dashes
end

def unicode_symbol(symbol)
  symbol.encode('utf-8')
end

recursion_trough_arr(arr)


  