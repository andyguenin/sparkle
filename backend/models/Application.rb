class Application < ActiveRecord::Base
  before_create :generate_key
  
  belongs_to :user
  
  validates :title, :presence => true, :uniqueness => true
  validates :user_id, :presence => true
  validates :url, :presence => true
  validates :description, :presence => true
  
  def generate_key
    self.secret = SecureRandom.hex(24)
  end
end