class Movie < ApplicationRecord
    has_many :user_movies
    has_many :users, through: :user_movies

    validates :name, presence: true, uniqueness: true
    validates :image, presence: true
end
