import React from 'react'
import '../style/gamecover.css'

function GameCover({ image }) {
  return (
    <div >
      <img src={image} alt="img" className='game-cover' />
    </div>
  )
}

export default GameCover
