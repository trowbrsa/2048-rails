class AddHighestScore < ActiveRecord::Migration
  def change
    add_column :users, :highest_score, :integer
  end
end
