require 'rails_helper'

RSpec.describe "CalculateFuelEfficiencyService", type: :model do
  describe "#call" do
    it "calculates fuel efficiency of vehicle response" do
      vehicle = Vehicle.create(id: 13, name: "2006 Ford Taurus (7T76F)", image_url: "https://d8g9nhlfs6lwh.cloudfront.net/security=poli...", category: "Car", external_id: 164, created_at: "2021-08-25 18:28:59.381379000 +0000", updated_at: "2021-08-25 18:28:59.381379000 +0000", efficiency: nil)
      fuel_entries = ApiServices::GetFuelEntriesService.call(vehicle)
      expect(AppServices::CalculateFuelEfficiencyService.call(fuel_entries)).to eq(30.653501735084905)
    end
  end
end