Rails.application.routes.draw do
  resources :points
  resources :users
  resources :pets
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
