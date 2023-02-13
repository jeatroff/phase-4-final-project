class ApplicationController < ActionController::API
    include ActionController::Cookies

    # For testing purposes only
    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
    end
end
