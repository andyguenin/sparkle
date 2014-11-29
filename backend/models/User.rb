class User < ActiveRecord::Base
  before_create :generate_key
  
  def generate_key
    self.api_key = SecureRandom.hex(24)
  end
end