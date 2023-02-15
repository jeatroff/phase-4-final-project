class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :description

  has_many :movies
  has_many :likes
end
