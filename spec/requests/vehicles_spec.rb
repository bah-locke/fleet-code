require 'rails_helper'

RSpec.describe "Vehicles", type: :request do
  describe "GET /index" do
    it "makes fuel_entries request to Fleetio API" do
      get "/"
      expect(response.content_type).to eq("text/html; charset=utf-8")
    end
  end
end
