import React from 'react'
import events from '../../../Assets/Home/events.png'
import './UpcomingEvents.css'

const UpcomingEvents = () => {
  return (
        <div class="col-sm-4 col-xs-12  py-3 py-sm-0">
            <div class="card card-shadow">
              <img class="card-img-top" src={events} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">A walk for healthy environment</h5>
                <div class="card-content">
                  <p class="event-header">Paul Walker, CEO of Green Organization</p>
                  <p class="event-time"><i class="fa-regular fa-calendar"></i>Sunday 2 Dec 2022 <i
                    class="fa-regular fa-clock"></i>10 A.M.</p>
                  <p class="card-text">Amet minim mollit non deserunt ullamco est sit aliq</p>
                </div>
              </div>
            </div>
          </div>
  )
}

export default UpcomingEvents
