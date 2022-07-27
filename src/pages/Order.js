import React, { useState } from 'react'
import '../style/order.css'

const Order = () => {
  const [num, setNum] = useState('')
  const [nam, setNam] = useState('')
  function nums(e) {
    setNum(e.target.value)

  }
  const last = (e) => {
    setNam(e.target.value)

  }

  console.log(num, nam)
  return (
    <div className='order'>
      <div className="cred">
        <p className='p1'>{num}</p>
        <p className='p1'>{nam}</p>
      </div>
      <h1 style={{ marginLeft: 150, textShadow: '10px 10px 5px black' }}>order</h1>
      <form action="">

        <input type="text" placeholder='number...' className='input' onChange={nums} value={num} />

        <input type="text" placeholder='last name...' className='input' onChange={last} value={nam} />
        <button className='class' style={{ marginLeft: 130, marginTop: 20 }}>купить</button>
      </form>
    </div>
  )
}

export default Order
