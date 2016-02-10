Rails.application.routes.draw do

  root to: "site#index"
  get "/auth/:provider/callback", to: "sessions#create"
  delete "/logout" => "sessions#destroy", as: :logout
  post "/savegame" => "games#save"

end
