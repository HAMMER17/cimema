import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { tottalPrice } from '../redax/totalprice'
import { orderPay } from '../redax/cart/redusr3'
// import Button from './Button'
import '../style/cartmenu.css'


function CartMenu({ items }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const payOrder = () => {
    dispatch(orderPay(items))
    navigate('/order/')
  }
  return (
    <div className='cart-menu'>
      <div className='cart-menu_cart-list'>
        {
          items.length > 0 ? items.map(elem =>
            <img src={elem.image} width={150} height={200} style={{ boxShadow: '0 0 15px white' }} alt='img' />
          ) : 'корзина пуста'
        }
      </div>
      {items.length > 0 ?
        <div className='cart-menu_tottal-price'>
          {tottalPrice(items)} руб.
        </div> : null}
      <button onClick={payOrder} className='class'>оформить</button>
    </div>
  )
}

export default CartMenu
