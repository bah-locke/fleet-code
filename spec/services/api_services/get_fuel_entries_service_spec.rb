require 'rails_helper'

RSpec.describe "GetFuelEntriesService", type: :model do
  describe "#call" do
    it "gets all Fuel Entries by vehicle external_id" do
      vehicle = Vehicle.create(id: 2, name: "2009 GMC Sierra 1500 Crew Cab (DSX74)", image_url: "https://d8g9nhlfs6lwh.cloudfront.net/security=poli...", category: "Truck", external_id: 152, created_at: "2021-08-25 18:28:59.271705000 +0000", updated_at: "2021-08-25 18:28:59.271705000 +0000", efficiency: nil)
      expect(ApiServices::GetFuelEntriesService.call(vehicle)).not_to be_empty
    end
  end
end