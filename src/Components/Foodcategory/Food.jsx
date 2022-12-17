import React from 'react'
import './Food.css'
import food1 from '../img/food1.jpg'
import food2 from '../img/food2.jpg'
import food3 from '../img/food3.jpg'


const Food = () => {
  return (
    <div>
         <div id="food">
        <h1 className="heading">Type of Food</h1>
        <div className="food-container container">
            <div className="food-type fruit">
                <div className="img-container">
                    <img src={food1} alt=""/>
                    <div className="img-content">
                        <h3>Fruit</h3>
                        <a href="https://en.wikipedia.org/wiki/Fruit" 
                        rel="noreferrer"
                        className="btn btn-primary" target="_blank">Learn more</a>
                    </div>
                </div>
            </div>
            <div className="food-type vegetable">
                <div className="img-container">
                    <img src={food2} alt=""/>
                    <div className="img-content">
                        <h3>Vegetable</h3>
                        <a href="https://en.wikipedia.org/wiki/Vegetable" 
                        rel="noreferrer"
                         className="btn btn-primary" 
                         target="_blank">Learn more</a>
                    </div>
                </div>
            </div>
            <div className="food-type grain">
                <div className="img-container">
                    <img src={food3} alt=""/>
                    <div className="img-content">
                        <h3>Grain</h3>
                        <a href="https://en.wikipedia.org/wiki/Grain" 
                        rel="noreferrer" 
                        className="btn btn-primary" 
                        target="_blank">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Food