import React,{useState} from "react";

function NewPlantForm({onFormSubmit}) {
  const [formname, setName]=useState("")
  const[formimage, setImage]= useState("")
  const[formprice, setPrice]= useState("")
  const [formState, setFormState]= useState({ 
    id: "",
    name: "",
    image: "",
    price: ""
  })
  function handleNameChange(event){
setName(event.target.value)
  }
  function handleImageChange(event){
    setImage(event.target.value)
      }
      function handlePriceChange(event){
        setPrice(event.target.value)
          }
const newItem={
  name: formname,
    image: formimage,
    price: formprice
  
}
//setFormState(newItem)
function handleSubmit(event){
event.preventDefault()
fetch("http://localhost:6001/plants", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newItem),
  })
    .then((r) => r.json())
    .then((item) =>{ onFormSubmit(item)
    setName("")
    setPrice("")
    setImage("")
    })
    ;
}
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input value ={formname} onChange={handleNameChange} type="text" name="name" placeholder="Plant name" />
        <input value ={formimage}onChange ={handleImageChange}type="text" name="image" placeholder="Image URL" />
        <input value ={formprice}onChange={handlePriceChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
