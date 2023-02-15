class ApplicationController < ActionController::API
    include ActionController::Cookies

    before_action :authorize

    def 

    private

    def authorize
        @current_user = User.find_by(id: session[:user_id])
        # unless @current_user
            # render json: {errors: {"Not authorized, please log in."}}, status: :unauthorized
        # end
    end
end
