import React from 'react'

import { useSelector } from 'react-redux'
import '../style/gamepages.css'

function GamePages() {
  const games = useSelector(state => state.game.currentGame)
  if (!games) return null;
  return (
    <div className='pages'>
      <h1>{games.title}</h1>
      <div className="pages-item">

      </div>
      <iframe src={games.video} frameborder="0"
        title='youtube'
        width={600} height={500}></iframe>
      <div className="p">
        <p>{games.description}</p>
      </div>
      <div className="img">
        <img src={games.image} width={300} height={400} alt='img' />
      </div>
    </div>
  )
}

export default GamePages
