Rails.application.routes.draw do

  root "site#index"
  get "/auth/github/callback", to: "sessions#create"

end
