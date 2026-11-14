class String
  def caesar_cipher(right_shift)
    array = self.split('')
    array.each do |char|
      if char.alphanumeric?
        new_ord = char.ord + right_shift
        if char.all_caps?
          new_ord -= 26 if new_ord > 90
        else
          new_ord -= 26 if new_ord > 122 # rubocop:disable Style/IfInsideElse
        end
        print new_ord.chr
      else
        print char
      end
    end
  end

  def alphanumeric?
    self.match?(/[a-zA-Z]+/)
  end

  def all_caps?
    self.match?(/[A-Z]+/)
  end
end

'What a string!'.caesar_cipher 5
