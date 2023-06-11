class UsersController < Sinatra::Base

    get "/users" do
        users = User.all
        users.to_json()
    end

end