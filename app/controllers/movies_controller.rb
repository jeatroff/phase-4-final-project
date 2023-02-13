class MoviesController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    def index
        render json: Movie.all, status: :ok
    end

    def show
        movie = Movie.find(params[:id])
        render json: movie, status: :ok
    end

    def create
        movie = Movie.create!(movie_params)
        render json: movie, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity      
    end

    def destroy
        movie = Movie.find(params[:id])
        movie.destroy
        render json: {}, status: :ok
    end

    private

    def movie_params
        params.permit(:name, :image, :description)
    end

    def record_not_found
        render json: {errors: ["Movie not found"]}, status: :not_found
    end
end
