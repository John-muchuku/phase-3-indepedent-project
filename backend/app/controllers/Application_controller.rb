class ApplicationController < Sinatra::Base
    set :sessions, true
    use Rack::Session::Cookie, expire_after: 3600
    
    def authorize
        if session[:user_id].blank?
         puts "Authorize called"
         message = {:error=> "Not Authorized"}
         # 
         halt 401, message.to_json
        end
     end
 




    get "/" do
        "<h1>GOD HELP ME</h1>"
    end

end