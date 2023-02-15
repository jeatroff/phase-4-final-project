class AddMessagesToLike < ActiveRecord::Migration[7.0]
  def change
    add_column :likes, :messages, :text, array: true, default: []
  end
end
