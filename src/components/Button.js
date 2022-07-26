import classNames from 'classnames'
import React from 'react'
import '../style/button.css'

function Button({ onClick, type, children, size = 's' }) {
  const btnClass = classNames({
    'btn': true,
    'btn-primary': type === 'primary',
    'btn-secondary': type === 'secondary',
    'btn-small': size === 's',
    'btn-medium': size === 'm'
  })
  return (
    <div className='btn2'>
      <button className={btnClass} onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button
