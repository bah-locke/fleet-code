import React, { useEffect, useState } from "react";

import VehicleIndexSkeleton from "../../components/VehicleIndexSkeleton";
import CardGroup from "../../components/CardGroup";

const _ = require('lodash');

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("/vehicles")
      .then((response) => response.json())
      .then((data) => {
        setVehicles(data);
        setLoading(false);
      })
  }, []);

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-4 gap-y-8 mb-10"
    >
      {loading ? (
        <VehicleIndexSkeleton />
      ) : (
        Object.entries(_.groupBy(vehicles, 'category')).map((group, ix) => (
          <CardGroup category={group[0]} vehicles={group[1]} key={ix}/>
        ))
      )}
    </ul>
  );
};

export default Index;
