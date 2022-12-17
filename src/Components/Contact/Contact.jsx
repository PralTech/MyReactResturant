import React from 'react'
import './Contact.css'
import company from '../img/company.jpg'

const Contact = () => {
    return (
        <div>
            <section id="contact">
                <div className="contact-container container ">
                    <div className="contact-image">
                        <img src={company} alt="" />
                    </div>
                    <div className="form-container">
                        <h2> Contact Us</h2>

                        <input type="text" name="" 
                        id="" placeholder="Name" />

                      

                        <input type="email" name=""
                         id="" placeholder="Email" />
                           <input type="" name="" 
                        id="" placeholder="Number" />

                        <textarea name="" id="" 
                        cols="30" rows="10" 
                        placeholder="Type Your Message Here">
                        </textarea>
                    
                        <a href="/" rel="noreferrer" 
                        className="btn btn-primary" >Submit</a>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Contact