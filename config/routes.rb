Rails.application.routes.draw do
  resources :likes
  resources :user_movies
  resources :users
  resources :movies

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/signup", to: "users#create"
  get "/me", to: "users#show_me"
  get "/movies", to: "movies#show"
  patch "/users", to: "users#update"
  delete "/users", to: "users#destroy"
  post "/user_movies", to: "user_movies#create"
  delete "/user_movies", to: "user_movies#destroy"
end
