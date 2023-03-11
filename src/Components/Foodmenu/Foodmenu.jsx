import React from 'react'
import './Foodmenu.css'
import fm1 from '../img/fm1.jpg'
import fm2 from '../img/fm2.jpg'
import fm3 from '../img/fm3.jpg'
import fm4 from '../img/fm4.jpg'
import fm5 from '../img/fm5.jpg'
import fm6 from '../img/fm6.jpg'
import Card from '../Foodcard/Card'


const Foodmenu = () => {
    
      
  return (
      <div>
          <div id="food-menu">
              <h2 className="food-menu-heading">
                  Food Menu
              </h2>
              <div className="food-menu-container container">

                  {/* cards */}
                  <Card
                      emoji={fm1}
                      heading={"Mix-Veg food"}
                      detail={"This is specialy made for you. please provide and order by clicking ordernow"}
                      price={"Price: 25 ₹"}
                  />

                  <Card
                      emoji={fm2}
                      heading={"Snacks"}
                      detail={"This is specialy made for you. please provide and order by clicking ordernow"}
                      price={"Price: 25 ₹"}
                  />
                  <Card
                      emoji={fm3}
                      heading={"Vegetable"}
                      detail={"This is specialy made for you. please provide and order by clicking ordernow"}
                      price={"Price: 25 ₹"}
                  />
                  <Card
                      emoji={fm4}
                      heading={"Vegetable Items"}
                      detail={"This is specialy made for you. please provide and order by clicking ordernow"}
                      price={"Price: 25 ₹"}
                  />
                  <Card
                      emoji={fm5}
                      heading={"Vegetable Items "}
                      detail={"This is specialy made for you. please provide and order by clicking ordernow"}
                      price={"Price: 25 ₹"}
                  />
                  <Card
                      emoji={fm6}
                      heading={"Vegetable Items"}
                      detail={"This is specialy made for you. please provide and order by clicking ordernow"}
                      price={"Price: 25 ₹"}
                  />
              </div>
          </div>
      </div>
  )
  }

export default Foodmenu