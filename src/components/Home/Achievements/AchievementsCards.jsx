import React from 'react'
import achievements from '../../../Assets/Home/achievements.jpg'

const AchievementsCards = () => {
  return (
      <div className="col-sm-4 col-xs-12 py-3 py-sm-0">
            {/* <!--One achievement card--> */}
            <div className="card card-shadow">
              <img id='cards-img1' className="card-img-top" src={achievements} alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title text-center">District Green Champion Award</h5>
              </div>
            </div>
            {/* <!--Card ends--> */}
          </div>          
  )
}

export default AchievementsCards
