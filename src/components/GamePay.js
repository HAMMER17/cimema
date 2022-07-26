import React from 'react'
import Button from './Button'

import { useDispatch, useSelector } from 'react-redux'
import { setItemsInCard, deleteItemsFromCard } from '../redax/cart/reduser'

import '../style/gamepay.css'

export default function GamePay({ game }) {
  const dispatch = useDispatch()
  const item = useSelector(state => state.cart.itemsInCard)
  const isItemsCart = item.some(elem => elem.id === game.id)


  function HandleClick(e) {
    e.stopPropagation()
    if (isItemsCart) {
      dispatch(deleteItemsFromCard(game.id))
    } else {
      dispatch(setItemsInCard(game))
    }

  }
  return (
    <div className='game-price'>
      <span className='game-pay_price'>{game.price} руб.</span>
      <Button onClick={HandleClick} type={isItemsCart ? 'secondary' : 'primary'}
      >{isItemsCart ? 'убрать из корзины' : 'добавить в корзину'}</Button>
    </div>
  )
}
