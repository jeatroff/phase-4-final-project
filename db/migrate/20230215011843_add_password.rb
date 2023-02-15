class AddPassword < ActiveRecord::Migration[7.0]
  def change
    rename_column :user, :password, :password_digest
  end
end
