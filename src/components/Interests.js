import React,{ useState } from 'react'
import games from '../interests'
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa'

const Interests = () => {
  const [index, setIndex] = useState(0)
  const {id, title, text, img} = games[index]

  const checkNumber = (number) => {
    if(number < 0) {
      return games.length - 1;
    } if (number > games.length -1) {
      return 0
      }
      //return the index that was passed to prevGame/nextGame
      return number
    }

  const prevGame = () => {
    //calling another function as an argument inside setIndex
    setIndex((index) => {
      let newIndex = index - 1
     return checkNumber(newIndex)
    })
  }

  const nextGame = () => {
    setIndex((index) => {
      let newIndex = index + 1
    return checkNumber(newIndex)
    })
  }


  return (
    <section className='interests'>
      <h1 className='header__text'>Interests</h1>
        <hr className='big hr-interests'></hr>

      <article className="game__slider">
        <div className="game" key={id}>
          <img className='game__img' src={img} alt={title}/>
            <h4 className="game__title">{title}</h4>
            <p className="game__text">{text}</p>
        </div>
          <div className="button-container">
          <span className="prev-btn">  
            <FaArrowLeft onClick={prevGame}/>
          </span>
          <span className="next-btn">
            <FaArrowRight onClick={nextGame}/>
          </span>
        </div>
      </article>
    </section>
  )
}

export default Interests
