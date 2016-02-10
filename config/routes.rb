Rails.application.routes.draw do

  root to: "site#index"
  get "/auth/:provider/callback", to: "sessions#create"
  delete "/logout" => "sessions#destroy", as: :logout
  get "/savedgames" => "users#savedgames", as: :savedgames
  post "/savegame" => "games#save"
  get '/games/:id' => 'games#resume_game', as: :resume_game
  get "/leaderboard" => "users#leaderboard", as: :leaderboard
  
end
