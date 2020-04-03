import React from 'react'
import 'style.scss'

const Button = (props) => {
  return (
    <button className={`btn ${props.primary ? 'btn--primary':''}`}>{props.children}</button>
  )
}

export default Button