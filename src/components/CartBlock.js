import React, { useState } from 'react'
import { BsCartPlus } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import '../style/cardblock.css'
import CartMenu from './CartMenu'
import { tottalPrice } from '../redax/totalprice'
import Current from './Current'

export default function CartBlock() {
  const [isCart, setIsCart] = useState(false)
  const items = useSelector(state => state.cart.itemsInCard)

  return (
    <div className='cart-block'>
      <BsCartPlus size={30} className='cart-block_icon' onClick={() => setIsCart(!isCart)} />
      <Current current={items.length} />
      <span className='cart-block_price'> {tottalPrice(items)} руб.</span>
      {isCart && <CartMenu onClick={() => null} items={items} />}
    </div>
  )
}
