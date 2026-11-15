def stock_picker(prices)
  profit = 0
  max_delta_indexes = []
  rest_of_prices = prices
  prices.each_with_index do |price, index|
    rest_of_prices.each_with_index do |rest_price, rest_index|
      current_profit = rest_price - price
      if current_profit.positive? && rest_index > index
        if current_profit > profit
          profit = current_profit
          max_delta_indexes = [index, rest_index]
        end
      end
    end
  end
  max_delta_indexes
end

p stock_picker([17,3,6,9,15,8,6,1,10])
#  => [1,4]  # for a profit of $15 - $3 == $12
