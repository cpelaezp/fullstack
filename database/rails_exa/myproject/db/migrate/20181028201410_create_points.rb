class CreatePoints < ActiveRecord::Migration[5.1]
  def change
    create_table :points do |t|
      t.float :postlatitud
      t.float :postlongitud
      t.string :iduser

      t.timestamps
    end
  end
end
