module Vehicles
  class FuelEntriesController < ApplicationController
    before_action(:set_vehicle)

    def index
      fuel_entries_response = ApiServices::GetFuelEntriesService.call(@vehicle)
      fuel_efficiency_calc = AppServices::CalculateFuelEfficiencyService.call(fuel_entries_response)
      @vehicle.efficiency = fuel_efficiency_calc

      if @vehicle.save && [fuel_entries_response].flatten.first["error"].nil?
        render json: { efficiency: fuel_efficiency_calc }
      else
        puts "The following response was recieved from the Fleetio API: #{fuel_entries_response}"
        render json: fuel_entries_response
      end
    end

    private

    def set_vehicle
      @vehicle = Vehicle.find_by!(external_id: params[:vehicle_id])
    end
  end
end
