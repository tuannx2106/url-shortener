import React from 'react'
import brandRecImg from '../../assets/img/icon-brand-recognition.svg'
import detailRecImg from '../../assets/img/icon-detailed-records.svg'
import fullyCustomImg from '../../assets/img/icon-fully-customizable.svg'
import Card from '../Card'
import './style.scss'

const AdvancedStatisticsSection = props => {
  return (
    <section className="section-adv-stat">
      <div className="container">
        <h2 className="headline headline--xl section-adv-stat__title">Advanced Statistics</h2>
        <p className="section-adv-stat__content">Track how your links are performing across the web with<br/>our advanced statistics dashboard. </p>
        <div className="card-group">
          <div className="card-group__line"></div>
          <Card
            className="card-group__item"
            img={brandRecImg}
            title="Brand Recognition"
            body="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
          />
          <Card
            className="card-group__item card-group__item-2"
            img={detailRecImg}
            title="Detailed Records"
            body="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          />
          <Card
            className="card-group__item card-group__item-3"
            img={fullyCustomImg}
            title="Brand Recognition"
            body="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          />
        </div>
      </div>
    </section>
  )
}

export default AdvancedStatisticsSection