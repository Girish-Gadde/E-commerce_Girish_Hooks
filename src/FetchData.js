import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Cart from './Cart';

const FetchData = () => {
    const [products, renderProducts] = useState([]);

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then( res => {console.log(res)
        renderProducts(res.data)})
        .catch(err => {console.log(err)})
    }, [])


  return (
    <div>
       <ul> 
       {
    products.map((mart)=>(
      <Cart key={mart.id}  mar={mart}/>
      ))
   }
       </ul>
    </div>
  )
}

export default FetchData