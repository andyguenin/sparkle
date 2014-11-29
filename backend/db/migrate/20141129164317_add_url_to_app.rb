class AddUrlToApp < ActiveRecord::Migration
  def change
    add_column :applications, :url, :string
    add_column :applications, :status, :int
  end
end
