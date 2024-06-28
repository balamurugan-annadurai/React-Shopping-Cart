import React  from 'react'

//Cart Component
const Cart = ({productCount}) => {
  return (
    <div className='cart'>
      <span className='icon'><i class='bx bxs-cart'></i></span>
      <p className='cart-title'>Cart</p>
      <p className='count'>{productCount}</p>
    </div>
  )
}

export default Cart