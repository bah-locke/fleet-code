import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";

import Button from "../ui/Button";
import Card from "./Card";

const VehicleCard = ({ vehicle }) => {
  const [loading, setLoading] = useState(false);
  const [efficiency, setEfficiency] = useState(vehicle.efficiency);

  const calculateEfficiency = useCallback(() => {
    setLoading(true);

    fetch(`/vehicles/${vehicle.external_id}/fuel_entries`)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          switch ((Math.floor(data.status/100)*100)) {
            case 400:
              toast.error("There was a problem with the Fleetio API request. Please contact Fleetio for more information.");
              break;
            case 500:
              toast.error("There was a problem with the Fleetio API server. Please contact Fleetio for more information.")
              break;
            default:
              toast.error(`The following error was recieved from the Fleetio Api: ${data.error}`);
          }
        } else {
         setEfficiency(data.efficiency.toFixed(2));
        }
        setLoading(false);
      })
      .catch(() => {
        toast.error("Oops, something went wrong!");
        setLoading(false);
      });
  }, [vehicle]);

  return (
    <Card object={vehicle}>
      <div className="flex justify-between items-start mt-2">
        <div className="truncate">
          <p className="block text-sm font-medium truncate text-gray-900 pointer-events-none">
            {vehicle.name}
          </p>
        </div>

        {(efficiency) ? (
          <p className="inline-flex items-center px-1.5 py-0.5 border border-transparent text-xs font-medium rounded text-gray-700 bg-gray-100 whitespace-nowrap">
            {Number.parseFloat(efficiency).toFixed(2)} MPG
          </p>
        ) : (
          <Button
            onClick={calculateEfficiency}
            theme="success"
            isLoading={loading}
          >
            {loading ? "Calculating..." : "Calculate"}
          </Button>
        )}
      </div>
    </Card>
  );
};

VehicleCard.propTypes = {
  vehicle: PropTypes.object.isRequired,
};

export default VehicleCard;
