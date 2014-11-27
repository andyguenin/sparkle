require 'sinatra'
require 'sinatra/activerecord'
Dir[File.dirname(__FILE__) + '/models/*.rb'].each {|file| require file }
set :database, "sqlite3:app.db"

 
get '/' do
    "Hello, World!"
end