class GamesController < ApplicationController
skip_before_action :verify_authenticity_token

  def show

  end

  def save
    game = Game.new
    game.data = params["grid"]

    if game.save
      render nothing: true, :status => :ok
    else
      # alert
      render nothing: true, :status => :no_content
    end
  end
end
