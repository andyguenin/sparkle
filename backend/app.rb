require 'sinatra'
require 'sinatra/activerecord'
require 'sinatra/cookies'
Dir[File.dirname(__FILE__) + '/models/*.rb'].each {|file| require file }
set :database, "sqlite3:app.db"
set :protection, :false

use Rack::Session::Cookie, :key => 'rack.session',
                           :path => '/',
                           :secret => 'the_secret_session_and_cookie_key'
                           

DISABLED = 0
PENDING = 1
ENABLED = 2
 
before do
   content_type :json  
   headers 'Access-Control-Allow-Origin' => 'http://localhost:9000', 
           'Access-Control-Allow-Credentials' => 'true', 
           'Access-Control-Allow-Methods' => ['GET', 'POST', 'OPTIONS'],
           'Access-Control-Allow-Headers' => ['Origin', 'X-Requested-With', 'Content-Type', 'Accept']
end

options '/app/create' do 
  200
end

post '/app/create' do
  p = JSON.parse(request.body.read)
  puts p
  app = Application.new
  app.user_id = session[:user_id]
  app.title = p['title']
  app.description = p['description']
  app.url = p['url']
  app.status = PENDING
  if app.save
    {'status' => 'success'}.to_json
  else
    {'status' => 'failure',
      'messages' => app.errors.messages}.to_json
  end
end

get '/apps/:username' do 
  u = User.find_by_username(params[:username])
  if u.nil?
    401
  else
    u.applications.joins(:user).map {|t| 
      {:secret => t.secret, :title => t.title, :description => t.description, :url => t.url, :name => t.user.name, :username => t.user.username}
    }.to_json
  end
end

get '/myapps/:app' do
  u = User.find(session[:user_id])
  if u.nil?
    401
  else
    u.applications.find_by_url(params[:app]).to_json
  end
end

get '/' do
  session[:user_id].to_s
end

get '/test_user' do
  a = User.first
  session[:user_id] = a.id
  {"username" => a.username, 'name' => a.name}.to_json
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

