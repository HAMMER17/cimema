import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import GameCover from './GameCover'
import GameGenge from './GameGenge'
import GamePay from './GamePay'
import { setCurrentGame } from '../redax/cart/reduser2'

import '../style/gameitem.css'


function GameItem({ game }) {
  const navigate = useNavigate()
  const dispach = useDispatch()
  const handleClick = () => {
    dispach(setCurrentGame(game))
    navigate(`/app/${game.title}`)
  }
  return (
    <div className='game-item' onClick={handleClick}>
      <span className='game-item_title'>{game.title}</span>
      <GameCover image={game.image} />
      {/* <img src={game.image} alt="img" width={150} height={200} className='game-item_img' /> */}
      <div className='game-item_detals'>

        <div className='game-item_genre'>
          {game.genres.map(genge => <GameGenge genge={genge} key={genge} />)}
        </div>

      </div>
      <GamePay game={game} />

    </div>
  )
}

export default GameItem
