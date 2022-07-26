import React from 'react'
import '../style/home.css'
import GameItem from '../components/GameItem'

const GAMES = [
  {
    image: '/images/batman.jpeg',
    title: 'hollywood news',
    genres: ['Гонки', 'Экшен', 'Война'],
    price: 2343,
    video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
    id: 1,
    description: "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
  },
  {
    image: '/images/start.jpeg',
    title: 'hollywood news',
    genres: ['Экшен', 'Шутер', 'Война'],
    video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
    price: 2433,
    id: 2,
    description: 'Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.'
  },
  {
    image: '/images/band.jpeg',
    title: 'hollywood news',
    genres: ['Глубокий сюжет', 'История'],
    video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
    price: 3021,
    id: 3,
    description: 'Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду.'
  },
  {
    image: '/images/ded.jpeg',
    title: 'hollywood news',
    genres: ['Открытый мир', 'Экшен'],
    video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
    price: 789,
    id: 4,
    description: 'Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду.'
  },
  {
    image: '/images/leg.png',
    title: 'hollywood news',
    video: 'https://www.youtube.com/embed/6wlvYh0h63k',
    genres: ['Тактика', 'Шутер'],
    price: 982,
    id: 5,
    description: 'Tom Clancy\'s Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.'
  },
  {
    image: '/images/images.jpeg',
    title: 'hollywood news',
    genres: ['История', 'Сказка', 'Открытый мир'],
    video: 'https://www.youtube.com/embed/ssrNcwxALS4',
    price: 2863,
    id: 6,
    description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
  },
  {
    image: '/images/mali.jpeg',
    title: 'hollywood news',
    genres: ['История', 'Сказка', 'Открытый мир'],
    video: 'https://www.youtube.com/embed/ssrNcwxALS4',
    price: 2863,
    id: 7,
    description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
  },
  {
    image: '/images/gnev.jpg',
    title: 'hollywood news',
    genres: ['Сюжет', 'Экшен', 'История'],
    video: 'https://www.youtube.com/embed/ssrNcwxALS4',
    price: 2863,
    id: 8,
    description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
  },
  {
    image: '/images/men.jpeg',
    title: 'hollywood news',
    genres: ['Сюжет', 'Зкшен', 'Открытый мир'],
    video: 'https://www.youtube.com/embed/ssrNcwxALS4',
    price: 2863,
    id: 9,
    description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
  },
]
export default function HomePages() {
  return (
    <div className='home'>
      {GAMES.map(game => <GameItem game={game} key={game.id} />)}
    </div>
  )
}
