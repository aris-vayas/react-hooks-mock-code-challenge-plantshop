import React,{useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const[plants,setPlants]= useState([])
  let filterPlants = plants
  const url= "http://localhost:6001/plants"
  useEffect(()=>{
    fetch(url)
    .then(r=>r.json())
    .then(plant=> setPlants(plant))
  },[plants])
  function onFormSubmit(newItem){
    
    setPlants(previousPlant=>[...previousPlant, newItem])
  }
  function onSearchFilter(item){
    
   setPlants(plants.filter( plant=> plant.name ===item))
    
  }
  return (
    <main>
      <NewPlantForm onFormSubmit={onFormSubmit}/>
      <Search onSearchFilter={onSearchFilter} />
      <PlantList plants={filterPlants} />
    </main>
  );
}

export default PlantPage;
