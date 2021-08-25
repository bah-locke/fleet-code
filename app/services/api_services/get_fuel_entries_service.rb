module ApiServices
  class GetFuelEntriesService < ApplicationService
    attr_reader :vehicle

    def initialize(vehicle)
      @vehicle = vehicle
    end

    def call
      HTTP.headers(
        authorization: "Token #{Rails.application.credentials.dig(:fleetio, :api_token)}",
        'account-token': Rails.application.credentials.dig(:fleetio, :account_token)
      ).get(
        'https://secure.fleetio.com/api/v1/fuel_entries',
        params: {
          'q[vehicle_id_eq]': vehicle.external_id,
          'q[s]': 'created_at+desc'
        }
      ).parse
    end

  end
end