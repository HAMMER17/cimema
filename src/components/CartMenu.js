import React from 'react'
import { tottalPrice } from '../redax/totalprice'
import Button from './Button'
import '../style/cartmenu.css'


function CartMenu({ items, onClick }) {
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
      <Button type={'primary'} size='m' onClick={onClick}>купить</Button>
    </div>
  )
}

export default CartMenu
