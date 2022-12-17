import React from 'react'
import './Testimonial.css'
import t1 from '../img/t1.jpg'
import t2 from '../img/t2.jpg'
import t3 from '../img/t3.jpg'


const Testimonial = () => {
  return (
    <div>
        <section id="testimonials">
    <h2 className="testmonial-title"> What Our Customer Says</h2>
    <div className="testimonial-container container">
        <div className="testmonial-box">
            <div className="star-rating">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
            </div>
            <p className="testmonial-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, ducimus?</p>
            <div className="customer-detail">
                <div className="customer-photo">
                    <img src={t1} alt=""/>
                </div>
                <p className="customer-name">John Doe</p>
            </div>
        </div>
        <div className="testmonial-box">
            <div className="star-rating">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>

            </div>
            <p className="testmonial-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, ducimus?</p>
            <div className="customer-detail">
                <div className="customer-photo">
                    <img src={t2} alt=""/>
                </div>
                <p className="customer-name">Devid</p>
            </div>
        </div>
        <div className="testmonial-box">
            <div className="star-rating">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>

            </div>
            <p className="testmonial-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, ducimus?</p>
            <div className="customer-detail">
                <div className="customer-photo">
                    <img src={t3} alt=""/>
                </div>
                <p className="customer-name">Jack</p>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default Testimonial