class AddEfficiencyToVehicles < ActiveRecord::Migration[6.1]
  def change
    add_column :vehicles, :efficiency, :decimal
  end
end
