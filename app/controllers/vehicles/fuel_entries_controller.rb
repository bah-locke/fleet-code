module Vehicles
  class FuelEntriesController < ApplicationController
    before_action(:set_vehicle)

    def index
      fuel_entries_response = ApiServices::GetFuelEntriesService.call(@vehicle)
      render json: { efficiency: AppServices::CalculateFuelEfficiencyService.call(fuel_entries_response) }
    
    end

    private

    def set_vehicle
      @vehicle = Vehicle.find_by!(external_id: params[:vehicle_id])
    end
  end
end
