import React from 'react'
import { FiInstagram, FiFacebook } from 'react-icons/fi'

const PictureCard = () => {
  return (
    <>
      <div className='pic-card mx-auto my-4'>
        <img src="https://picsum.photos/600/400?nature" alt="" />
        <div className="text">Week no. 53</div>
        <div className="socials">
          <a href="/nox"><FiInstagram /></a>
          <a href="/nox"><FiFacebook /></a>
        </div>
      </div>
    </>
  )
}

export default PictureCard
