class UsersController < ApplicationController

  def show
    @games = @curernt_user.games
  end

end
