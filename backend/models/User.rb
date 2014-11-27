class User < ActiveRecord::Base
  attr_readonly :api_key
  before_create :generate_key
  
  validates :username, :presence => true
  
  private
  def generate_key
    self.api_key = SecureRandom.hex(24)
  end
end