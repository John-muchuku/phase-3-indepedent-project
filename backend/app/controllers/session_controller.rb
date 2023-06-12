class SessionController < ApplicationController


    post "/auth/login" do
        username=params['username']
        password=params[:password]
        
       
        # puts password
        if(username.present? && password.present? )
            user = User.find_by(username: username)

            if (user && user.authenticate(password))
                session[:user_id] = user.id

                message = {:success=> "Login success"}
                message.to_json

            else
                status 401
                message = {:error=> "Wrong username or password"}
                message.to_json
            end
          
        
        else
            status 406
            message = {:error=> "All values are required"}
            message.to_json()
        end
    end


    # Logout
    post "/auth/logout" do
       session.delete :user_id
       message = {:success=> "Logout success"}
       message.to_json()
    end 
end