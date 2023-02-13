class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :description

  has_many :movies
end
