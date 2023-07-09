import React from 'react'
import events from '../../../Assets/Home/events.png'
import './UpcomingEvents.css'

const UpcomingEvents = () => {
  return (
        <div className="col-sm-4 col-xs-12  py-3 py-sm-0">
            <div className="card card-shadow">
              <img className="card-img-top" src={events} alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">A walk for healthy environment</h5>
                <div className="card-content">
                  <p className="event-header">Paul Walker, CEO of Green Organization</p>
                  <p className="event-time"><i className="fa-regular fa-calendar"></i>Sunday 2 Dec 2022 <i
                    className="fa-regular fa-clock"></i>10 A.M.</p>
                  <p className="card-text">Amet minim mollit non deserunt ullamco est sit aliq</p>
                </div>
              </div>
            </div>
          </div>
  )
}

export default UpcomingEvents
