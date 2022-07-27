import React from 'react'
import '../style/order.css'

const Order = () => {
  return (
    <div className='order'>
      <h1 style={{ marginLeft: 150, textShadow: '10px 10px 5px black' }}>order</h1>
      <form action="">

        <input type="text" placeholder='number...' className='input' />

        <input type="text" placeholder='last name...' className='input' />

      </form>
    </div>
  )
}

export default Order
