import React,{useState} from "react";

function PlantCard({plant}) {
  const[buttonstate, setButtonState]=useState(true)
  function changeButton(){
    setButtonState(!buttonstate)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>


  {buttonstate ? ( <button onClick={changeButton}className="primary">In Stock</button>) : (<button onClick={changeButton}>Out of Stock</button>)}
    </li>
  );
}

export default PlantCard;
