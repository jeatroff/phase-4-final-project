class LikesController < ApplicationController

rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
  
    def create
        like = Like.create!(like_params)
        render json: like, status: :created
    end

    def update
        like = Like.find(params[:id])
        like.update(like_params)
        render json: like, status: :ok
    end

    def destroy
        like = Like.find(params[:id])
        like.destroy
        render json: {}, status: :ok
    end

    def index
        render json: Like.all, status: :ok
    end

    private

    def like_params
        params.permit(:user_1, :user_2, :is_match, :messages)
    end

    def record_invalid
        render json: {errors: ["validation errors"]}, status: :unprocessable_entity
    end
end
