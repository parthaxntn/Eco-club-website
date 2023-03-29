import React from 'react'
import achievements from '../../../Assets/Home/achievements.jpg'

const AchievementsCards = () => {
  return (
      <div class="col-sm-4 col-xs-12 py-3 py-sm-0">
            {/* <!--One achievement card--> */}
            <div class="card card-shadow">
              <img class="card-img-top" src={achievements} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title text-center">District Green Champion Award</h5>
              </div>
            </div>
            {/* <!--Card ends--> */}
          </div>          
  )
}

export default AchievementsCards
