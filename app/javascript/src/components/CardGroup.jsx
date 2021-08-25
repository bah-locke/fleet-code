import React from "react";
import VehicleCard from "./VehicleCard";

const CardGroup = ({category, vehicles}) => {

  return (
    <div>
      <span style={{position: "relative", backgroundColor: "white", fontSize: "x-large", fontWeight: "bold"}}>{category}</span><hr style={{ position: "relative", bottom: "17px", zIndex: "-1"}}/>
      <ul
        role="list"
        className="grid grid-cols-3 gap-x-4 gap-y-8 mb-10"
      >
        {vehicles.map((vehicle) => (
          <VehicleCard vehicle={vehicle} key={vehicle.id} />
        ))}
      </ul>
    </div>
  )
}

export default CardGroup;