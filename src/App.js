import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Basket, Tree } from './component'
import './App.scss'

const App = () => {
  const [shake, setShake] = useState('tree')
  const [info, setInfo] = useState('')
  const [run, setRun] = useState(false)

  const dispatch = useDispatch()
  const appleOnTree = useSelector((state) => state.projects.appleOnTree)
  const appleOnBasket = useSelector((state) => state.projects.basket)

  const click = () => {
    shaking()
  }

  const shaking = () => {
    const random = Math.floor(Math.random() * 3) + 1
    if (appleOnTree.length > 0) {
      setRun(true)
      setShake('tree shaking')
      setTimeout(() => {
        setShake('tree')
        dispatch({ type: 'DROP_APPLE', payload: random })
        setRun(false)
      }, 3000)
    }
    if (appleOnBasket.length < 6) {
      setRun(true)
      setTimeout(() => {
        dispatch({
          type: 'ADD_APPLE',
          payload: random
        })
        setRun(false)
      }, 4000)
    } else {
      setInfo('There are no apples on the tree 🍎')
    }
  }

  return (
    <div className="base-container">
      <div className="container">
        <div className="main">
          <Tree name={shake} />
        </div>
        <div>
          <Basket />
        </div>
        <div className="button-container">
          {info === '' ? (
            run !== true ? (
              <button className="button" onClick={click}>
                SHAKE
              </button>
            ) : (
              <button className="button">Shaking happening 👀</button>
            )
          ) : (
            <button className="button">{info}</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
