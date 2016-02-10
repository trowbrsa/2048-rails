class GamesController < ApplicationController
skip_before_action :verify_authenticity_token

  def view_current_game

  end

  def save
    game = Game.new
    game.data = params["grid"]
    game.current_score = params["score"]
    game.user_id = @current_user.id
    if game.save
      render nothing: true, :status => :ok
    else
      # alert
      render nothing: true, :status => :no_content
    end
  end
end
