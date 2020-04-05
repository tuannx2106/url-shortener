import React from 'react'

const Card = props => {
  const { className, img, title, body } = props
  return (
    <div className={`card ${className}`}>
      <figure className="card__img">
        <img src={img} alt="logo" />
      </figure>
      <h3 className="headline headline--lg card__header">{title}</h3>
      <p className="card__body">{body}</p>
    </div>
  )
}

export default Card