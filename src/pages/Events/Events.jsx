import React from 'react'
import './Events.css'
import GandhiJayanti from '../../Assets/Gandhi Jayanti.png'

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

    <div class="container">
        <div class="row text-center row">
            <div class="pt-1 px-3 col-xs-12 my-3 my-xl-0">
                <img src={GandhiJayanti} alt="..."/>
            </div>
            <div class="pt-1 px-3 col-xs-12 my-3 my-xl-0">
                <img src={GandhiJayanti} alt="..."/>
            </div>
             <div class="pt-1 px-3 col-xs-12 my-3 my-xl-0">
                <img src={GandhiJayanti} alt="..."/>
            </div>
        </div>
        <div class="row text-center row">
            <div class="pt-4 px-3 col-xs-12 my-3 my-xl-0">
                <img src={GandhiJayanti} alt="..."/>
            </div>
             <div class="pt-4 px-3 col-xs-12 my-3 my-xl-0">
                <img src={GandhiJayanti} alt="..."/>
            </div>
             <div class="pt-4 px-3 col-xs-12 my-3 my-xl-0">
                <img src={GandhiJayanti} alt="..."/>
            </div>
        </div>
        <div class="row text-center row pb-5">
            <div class="col-xs-12 my-3 my-xl-0 pt-4 px-3">
                <img src={GandhiJayanti} alt="..."/>
            </div>
             <div class="col-xs-12 my-3 my-xl-0 pt-4 px-3">
                <img src={GandhiJayanti} alt="..."/>
            </div>
             <div class="col-xs-12 my-3 my-xl-0 pt-4 px-3">
                <img src={GandhiJayanti} alt="..."/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Events
