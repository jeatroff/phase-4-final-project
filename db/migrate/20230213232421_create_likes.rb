class CreateLikes < ActiveRecord::Migration[7.0]
  def change
    create_table :likes do |t|
      t.integer :user_id_1
      t.integer :user_id_2
      t.boolean :is_match
      t.timestamps
    end
  end
end
