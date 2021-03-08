import React from 'react'
import { useSelector } from 'react-redux'
import Apple from '../Apple'
import { basket } from '../../assets'
import './style.scss'

const Basket = () => {
  const appleOnBasket = useSelector((state) => state.projects.basket)

  return (
    <div className="basket-container">
      <img src={basket} alt="basket" className="basket" />;
      <div className="apple-container">
        {appleOnBasket.map((data, index) => (
          <div key={index}>
            <Apple name={'drop-apple'} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Basket
