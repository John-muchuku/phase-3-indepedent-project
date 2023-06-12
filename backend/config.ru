require 'bundler/setup'
# require 'sqlite3'

require_relative "./config/environment"



configure do
  set :database, {
    adapter: 'sqlite3',
    database: 'db/development.sqlite3'
  }
end







run ApplicationController
use PostsController
use UsersController
use SessionController