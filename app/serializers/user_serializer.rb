class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :description, :username, :password

  has_many :movies
  #has_many :likes

  def password
    self.object.password_digest
  end
end
