import React from 'react'
import './NewCollections.css'
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'
const NewCollections = () => {
  return (
    <div className='new-collections'>
     <h1>NEW COLLECTIONs</h1>
     <hr/>
     <div className='collections'>
     {new_collection.map((item,i)=>{
        return <Item Key={i} id={item.id} name={item.name} image={item.image} new_prices={item.new_price} old_price={item.old_price}/>
     })}
     </div>
    </div>
  )
}

export default NewCollections