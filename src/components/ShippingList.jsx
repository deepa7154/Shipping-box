import React, {useState} from 'react'
import ShippingForm from './ShippingForm';

 function ShippingList() {
    const{items,setItems}= useState([]);
    const addToList= item => {
        console.log(item);
        const itemsCopy=[...items];
        itemsCopy.push(item);
        setItems(itemsCopy);

    };
  return (
    <div>
        <ShippingForm addToListCallback={(value) => addToList(value)} />
        <table>
            
                
            <th>title</th>
            <th>weight</th>
            <th>color</th>
            <th>place</th>
    
        
        
            {
            items.map(item =>
            {
                return (
                    <tr key={item.title}>
                    <td>{item.title}</td>
                    <td>{item.weight}</td>
                    <td>
                        <div
                            style={{backgroundColor: item.color,width:"60px",height:"30px", }}>
                        </div>
                    </td>
                    <td>{item.place}</td>
                    </tr>

                )
            })
        }
        
 
        </table>
    </div>
  )
 }
export default ShippingList
