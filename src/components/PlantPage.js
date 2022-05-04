import React,{useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const[plants,setPlants]= useState([])
  const[ search, setSearch]= useState("")
  const url= "http://localhost:6001/plants"
  useEffect(()=>{
    fetch(url)
    .then(r=>r.json())
    .then(plant=> setPlants(plant))
  },[])
  function onFormSubmit(newItem){
    
    setPlants(previousPlant=>[...previousPlant, newItem])
  }
  const filterPlants = plants.filter(
    (plant) => search === "" || plant.name === search
  )
  return (
    <main>
      <NewPlantForm onFormSubmit={onFormSubmit}/>
      <Search search={search} onSearchFilter={setSearch} />
      <PlantList plants={filterPlants} />
    </main>
  );
}

export default PlantPage;
