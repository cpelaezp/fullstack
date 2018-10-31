class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.string :titulo
      t.text :contenido

      t.timestamps
    end
  end
end
