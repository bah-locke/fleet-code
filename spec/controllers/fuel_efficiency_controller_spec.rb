require 'rails_helper'

RSpec.describe "FuelEfficiencyController", type: :request do
  describe "#index" do
    it "gets fuel efficiency by vehicle id and updates vehicle efficiency" do
      Vehicle.create!(id: 13, name: "2006 Ford Taurus (7T76F)", image_url: "https://d8g9nhlfs6lwh.cloudfront.net/security=poli...", category: "Car", external_id: 164, created_at: "2021-08-25 18:28:59.381379000 +0000", updated_at: "2021-08-25 18:28:59.381379000 +0000", efficiency: nil)
      get vehicle_fuel_entries_path({vehicle_id: 164})
      expect(Vehicle.find(13).efficiency).to eq(0.306535017350849e2)
    end
  end
end
