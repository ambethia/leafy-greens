class MapsController < ApplicationController
  def index; end

  def locations
    render json: [
      { id: 1, x: 145, y: 175.2, title: 'Sol' },
      { id: 2, x: 184.5, y: 222.2, title: 'Foobery' }
    ]
  end

  def show
    render html: "This is map #{params[:id]}!"
  end
end
