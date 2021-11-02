Rails.application.routes.draw do
  root to: 'maps#index'

  get '/locations', to: 'maps#locations'

  get '/maps/:id', to: 'maps#show'

end
