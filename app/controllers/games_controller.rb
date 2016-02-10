class GamesController < ApplicationController
skip_before_action :verify_authenticity_token


  def resume_game
    current_game = Game.find(params[:id])
    if current_game.user_id == @current_user.id
      render :json => current_game.as_json(except: [:created_at, :updated_at]), :status => :ok
    else
      render :json => [], :status => :no_content
    end
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
