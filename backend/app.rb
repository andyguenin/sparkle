require 'sinatra'
require 'sinatra/activerecord'
require 'sinatra/cookies'
Dir[File.dirname(__FILE__) + '/models/*.rb'].each {|file| require file }
set :database, "sqlite3:app.db"
set :protection, :false
enable :sessions

 
before do
   content_type :json  
   headers 'Access-Control-Allow-Origin' => 'http://localhost:9000', 
           'Access-Control-Allow-Credentials' => 'true', 
           'Access-Control-Allow-Methods' => ['GET', 'POST']      
end

get '/' do
  session[:user_id].to_s
end

post '/test_user' do
  session[:user_id] = User.first.id
  200
end

get '/logout' do
  session[:user_id] = nil
  200
end

get '/profile' do
  if(session[:user_id].nil?)
    [].to_s
  else
    u = User.find(session[:user_id])
    {'username' => u.username, 'name' => u.name, 'api_key' => u.api_key}.to_s
  end
end