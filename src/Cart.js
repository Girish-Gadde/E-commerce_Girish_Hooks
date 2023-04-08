import React from 'react'

const Cart = ({mar}) => {
  return (
    <div className='products'>
        <img src={mar.image} alt={mar.title} />
        <h5>Title: {mar.title}</h5>
        <h3> Price: {mar.price}</h3>
    </div>
  )
}

export default Cart