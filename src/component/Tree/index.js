import React from 'react'
import { useSelector } from 'react-redux'
import Apple from '../Apple'
import { tree } from '../../assets'
import './style.scss'

const Tree = (props) => {
  const appleOnTree = useSelector((state) => state.projects.appleOnTree)
  return (
    <div className="tree-container">
      <div className="apple-on-tree">
        <img src={tree} alt="tree" className={props.name} />
        <div className="apples-container">
          {appleOnTree.map((data, index) => (
            <div key={index}>
              <Apple name={'apple'} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tree
