class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :data
      t.integer :user_id
      t.integer :current_score

      t.timestamps null: false
    end
  end
end
