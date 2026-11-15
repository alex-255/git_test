# frozen_string_literal: true

dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]

def substrings(string, dictionary)
  string_array = string.downcase.split
  result = Hash.new(0)
  dictionary.each do |word|
    string_array.each do |part_of_string|
      if part_of_string =~ /#{word}/ # rubocop:disable Style/IfUnlessModifier
        result[word] += 1
      end
    end
  end
  result
end

p substrings('below', dictionary)
p substrings("Howdy partner, sit down! How's it going?", dictionary)
#  => { "down" => 1, "go" => 1, "going" => 1, "how" => 2, "howdy" => 1, "it" => 2, "i" => 3, "own" => 1, "part" => 1, "partner" => 1, "sit" => 1 }
