import React from 'react'
import initiatives from '../../../Assets/Home/initiatives.jpg'
import './GreenInitiatives.css'

const GreenInitiatives = () => {
  return (
      <div className="col-sm-6 col-xs-12 py-3 py-sm-0">
            <div className="card card-shadow">
              <img id='cards-img1' className="card-img-top" src={initiatives} alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title text-center">Solar Panel</h5>
                <div className="card-content">
                  <p className="card-text">Amet minim mollit non deserunt ullamco est sit aliq</p>
                </div>
              </div>
            </div>
          </div>
  )
}

export default GreenInitiatives
