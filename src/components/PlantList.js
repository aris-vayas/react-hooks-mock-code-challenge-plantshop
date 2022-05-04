import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  const renderPlant = plants.map(plant=>{
    return(
    <PlantCard plant={plant}/>)
  })


  return (
    <ul className="cards">{renderPlant}</ul>
  );
}

export default PlantList;
