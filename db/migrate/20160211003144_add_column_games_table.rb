class AddColumnGamesTable < ActiveRecord::Migration
  def change
    add_column :games, :over, :boolean
    add_column :games, :won, :boolean
    add_column :games, :keepPlaying, :boolean
  end
end
