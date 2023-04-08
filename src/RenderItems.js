import React, { useEffect, useState } from 'react'
import Cart from './Cart';


    
const RenderItems = () => {

    const [items, renderItems] = useState([]);

    useEffect(()=>{
        console.log('Items are rendering')
    
    }, [])

    useEffect( ()=> {
      async function fetchData() { 
        const api = 'https://fakestoreapi.com/products'
        const apidata = await fetch(api)
        const itemData = await apidata.json();
        console.log(itemData)
        renderItems(itemData)
        }
        fetchData()
    
    }, []);


  return (
    <div className='item-container'>
    {
    items.map((mart)=>(
      <Cart key={mart.id}  mar={mart}/>

  ))
   }
    </div>
  )
}

export default RenderItems