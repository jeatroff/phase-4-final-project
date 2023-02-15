class LikeSerializer < ActiveModel::Serializer
  attributes :id, :user_1, :user_2, :is_match, :messages
end
