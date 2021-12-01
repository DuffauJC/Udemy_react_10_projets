import React from 'react'
import './Home.css'
import imgHomeShop from './shopimg.jpg'

export default function Home() {
    return (
        <div className="global-container">
            <h1 className="home-title">Bienvenue au <span>Shop</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error saepe voluptate iusto dignissimos cum praesentium tempora magni voluptates consequatur facilis quaerat maiores earum, dolore, soluta quam, incidunt tempore. Eius, facere.</p>
            <img src={imgHomeShop} alt="accueil shop" />
        </div>
    )
}
