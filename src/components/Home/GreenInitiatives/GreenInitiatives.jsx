import React from 'react'
import initiatives from '../../../Assets/Home/initiatives.jpg'

const GreenInitiatives = () => {
  return (
      <div class="col-sm-6 col-xs-12 py-3 py-sm-0">
            <div class="card card-shadow">
              <img class="card-img-top" src={initiatives} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title text-center">Solar Panel</h5>
                <div class="card-content">
                  <p class="card-text">Amet minim mollit non deserunt ullamco est sit aliq</p>
                </div>
              </div>
            </div>
          </div>
  )
}

export default GreenInitiatives
