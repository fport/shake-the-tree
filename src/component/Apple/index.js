import React from 'react'
import { apple } from '../../assets'
import './style.scss'

const Apple = (props) => {
  return <img src={apple} alt="apple" className={props.name} />
}

export default Apple
