import React from 'react'

const card = (offerPrice, image, name, rating, actualPrice) => {
  return (
    <div className='card'>
        <div className='card__image'>
            <img src={image} alt="image"/>
        </div>
        <div className='card__details'>
            <p>Adidas</p>
            <p>running shoes</p>
            <span>{offerPrice}</span>
            <span>{actualPrice}</span>
            <span>56%</span>

        </div>
        <div className='card__size'>
            <p>Size <span>5, 6, 7, 8</span></p>
        </div>

    </div>
  )
}

export default card