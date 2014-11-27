configure :production, :development do
 
	ActiveRecord::Base.establish_connection(
			:adapter => 'sqlite3',
      :database => "./"
	)
end