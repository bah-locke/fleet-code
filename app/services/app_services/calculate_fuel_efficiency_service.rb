module AppServices
  class CalculateFuelEfficiencyService < ApplicationService
    attr_reader :fuel_entries

    def initialize(fuel_entries)
      @fuel_entries = fuel_entries
    end

    def call
      usage = fuel_entries.sum { |fuel_entry| fuel_entry['usage_in_mi'].to_f }
      gallons = fuel_entries.sum { |fuel_entry| fuel_entry['us_gallons'].to_f }

      (usage.to_f / gallons)
    end

  end

end