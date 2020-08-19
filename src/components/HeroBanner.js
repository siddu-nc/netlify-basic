import React from 'react'

const HeroBanner = ({ heroBanner }) => {
  console.log(heroBanner);
  return (
    <div className="hero-banner-container w-screen h-screen relative flex justify-center items-center">
      {
        heroBanner.backgroundImg &&  <div className="image-wrapper w-i h-i absolute"><img className="w-i h-i object-cover" src={heroBanner.backgroundImg}></img></div>
      }
      <div className="hero-content-wrapper z-1 text-white">
        <div className="hero-content-title font-bold text-70px">
          <p>{heroBanner.title}</p>
        </div>
        {heroBanner.subTitle && (
          <div className="hero-content-subtitle max-w-30rem mx-auto text-34px">
            <p>{heroBanner.subTitle}</p>
          </div>
        )}
        <div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
