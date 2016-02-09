Rails.application.routes.draw do

  root to: "users#show"
  get "/auth/:provider/callback", to: "sessions#create"

end
