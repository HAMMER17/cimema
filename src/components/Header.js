import React from 'react'
import { Link } from 'react-router-dom'
import '../style/header.css'
import CartBlock from './CartBlock'

function Header() {
  return (
    <div className='header'>
      <div className="wrapper">
        <Link className='header_store-title' to={'/'}>cinemashop</Link>
      </div>
      <div className='wrapper header_cart-btn-wrapper'><CartBlock /></div>
    </div>
  )
}

export default Header
