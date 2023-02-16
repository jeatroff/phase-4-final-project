class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    def index
        render json: User.all, status: :ok
    end

    def show
        user = User.find(params[:id])
        render json: user, status: :ok
    end

    def show_me
        render json: @current_user, status: :ok
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity      
    end

    def update
        user = User.find(params[:id])
        user.update(user_params)
        render json: user, status: :ok
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        render json: {}, status: :ok
    end

    private

    def user_params
        params.permit(:username, :password, :name, :age, :description)
    end

    def record_not_found
        render json: {errors: ["User not found"]}, status: :not_found
    end
end
