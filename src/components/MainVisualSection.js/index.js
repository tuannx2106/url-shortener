import React from 'react'
import FormUrlShorten from './FormUrlShorten'
import mainVisualImg from '../../assets/img/illustration-working.svg'
import './style.scss'

const MainVisualSection = props => {
  return (
    <section className="section-main-visual container">
      <img src={mainVisualImg} alt="main visual" className="main-visual-img" />
      <div className="content-area">
        <h1 className="headline headline--xxl title">More than just shorter links</h1>
        <p className="content">Build your brand’s recognition and get detailed insights on how your links are performing. </p>
        <button className="button button--primary">Get Started</button>
      </div>
      <FormUrlShorten />
    </section>
  )
}

export default MainVisualSection