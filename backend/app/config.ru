require_relative "./config/environment"



run ApplicationController
use PostsController
use UsersController