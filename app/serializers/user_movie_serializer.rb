class UserMovieSerializer < ActiveModel::Serializer
  attributes :id, :name, :image

  def name
    self.object.movie.name
  end

  def image
    self.object.movie.image
  end
end
