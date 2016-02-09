class GamesController < ApplicationController
skip_before_action :verify_authenticity_token

  def show

  end

  def save
    # save game to DB
  end

end
