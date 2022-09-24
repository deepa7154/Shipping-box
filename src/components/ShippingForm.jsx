import React,{ useState} from 'react'

function ShippingForm(props) {
    const [title,setTitle]= useState("");
    const [weight,setWeight]= useState("");
    const [color,setColor]= useState("");
    const [place,setPlace]= useState("");
     const handleSubmit =(e) => {
        e.preventDefault();
    const data= {
    title: title,
    weight: weight,
    color: color,
    place: place,
    }
    props.addToListCallback(data)
    
}
return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>ShippingForm</h1>
            <input type="text" value={title} placeholder="Tittle" onChange={(e) => setTitle(e.target.value)} /><br></br>
            <input type="number" value={weight} placeholder="Weight" onChange={(e) => setWeight(e.target.value)} /><br></br>
            <label>color</label><br></br>
            <input type="color" value={color} placeholder="color" onChange={(e) => setColor(e.target.value)} /><br></br>
            <input type="text" value={place} placeholder="Place" onChange={(e) => setPlace(e.target.value)} /><br></br>
            <button>Submit</button><br></br>
        </form>
        
    </div>
  )
}

export default ShippingForm