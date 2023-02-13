class User < ApplicationRecord
    has_many :user_movies
    has_many :movies, through: :user_movies

    validates :name, presence: true
    validates :age, presence: true
end
