class CreateApplications < ActiveRecord::Migration
  def change
    create_table :applications do |t|
      t.integer :user_id
      t.string :secret
      t.string :title
      t.text :description
    end
  end
end
