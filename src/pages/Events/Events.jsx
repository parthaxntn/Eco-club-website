import React from 'react'
import './Events.css'
import EventsCard from '../../components/Events/EventsCard'

const Events = () => {
  return (
    <div className='events'>
      <div class="event-container">
        <div class="text pt-5 text-center">
            <h2>Gandhi Jayanti</h2>
            {/* <!-- <hr> --> */}
        </div>
    </div>

        {/* <!-- for grids of photos --> */}

    <div class="event-img-container container mb-5 text-center d-flex flex-wrap m-auto">
        <EventsCard/>
        <EventsCard/>
        <EventsCard/>
        <EventsCard/>
        <EventsCard/>
        <EventsCard/>
        <EventsCard/>
        <EventsCard/>
        <EventsCard/>
    </div>
    </div>
  )
}

export default Events
