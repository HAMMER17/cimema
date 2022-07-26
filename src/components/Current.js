import React from 'react'
import '../style/current.css'

function Current({ current = 0 }) {
  return (
    <div className='current'>
      {current}
    </div>
  )
}

export default Current
