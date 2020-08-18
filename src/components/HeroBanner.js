import React from 'react'

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div className="image-wrapper">
        <img src=""></img>
      </div>
      <div className="hero-content-wrapper">
        <div className="hero-content-title">
          <p>{heroBanner.title}</p>
        </div>
        {heroBanner.subTitle && (
          <div className="hero-content-subtitle">
            <p>{heroBanner.subTitle}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default HeroBanner
