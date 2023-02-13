class UserMoviesController < ApplicationController

rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

    def create
        user_movie = UserMovie.create!(user_movie_params)
        render json: user_movie, status: :created
    end

    def destroy
        user_movie = UserMovie.find(params[:id])
        user_movie.destroy
        render json: {}, status: :ok
    end

    private

    def user_movie_params
        params.permit(:user_id, :movie_id)
    end

    def record_invalid
        render json: {errors: ["validation errors"]}, status: :unprocessable_entity
    end
end
