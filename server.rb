require 'sinatra'

# get '*' do
#   send_file File.expand_path('index.html', settings.public_folder)
# end

get '/' do
  send_file File.expand_path('index.html', settings.public_folder)
end

get '/greeting' do
  send_file File.expand_path('index.html', settings.public_folder)
end

get '/goodbye' do
  send_file File.expand_path('index.html', settings.public_folder)
end

get '/custom-greeting' do
  send_file File.expand_path('index.html', settings.public_folder)
end
