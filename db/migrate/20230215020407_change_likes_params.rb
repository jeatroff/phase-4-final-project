class ChangeLikesParams < ActiveRecord::Migration[7.0]
  def change
    rename_column :likes, :user_id_1, :user_1_id
    rename_column :likes, :user_id_2, :user_2_id
  end
end
