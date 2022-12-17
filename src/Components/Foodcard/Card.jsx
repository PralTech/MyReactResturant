import React from 'react'
import './Card.css'

const Card = ({emoji, heading, detail, price}) => {
  return (
      <div>
          
              <div className="food-menu-item">
                  <div className="food-image">
                      <img src={emoji} alt="" />
                  </div>
                  <div className="food-discription">
                      <h2 className="food-titel">{heading}</h2>
                      <p>{detail}</p>
                      <p className="food-price">{price} </p>
                      <button className='btn btn-primary'>Order Now</button>
                  </div>
              
    </div>
    </div>
  )}


export default Card