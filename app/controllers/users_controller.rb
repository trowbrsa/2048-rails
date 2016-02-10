class UsersController < ApplicationController

  def saved_games
    current_games = @current_user.games
    @display_current_games = current_games
  end



end
