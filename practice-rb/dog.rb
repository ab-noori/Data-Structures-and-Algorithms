require_relative "animal.rb"
require_relative "foods.rb"

class Dog < Animal
  def initialize(color, name = "Unknown")
    super("dog", 4, name)
    @color = color
    @liked_food = DogFood.new()
  end

  def bring_a_stick
    "Here is your stick: ---------"
  end

  def speak
    "Woof, woof"
  end
end