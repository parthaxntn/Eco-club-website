import React from 'react'
import './Events.css'
// import EventsCard from '../../components/Events/EventsCard'
import Data from './Events.json'
import GandhiJayanti from '../../Assets/Gandhi Jayanti.png'


const Events = () => {
    return (
        <section className="first">
            <div className="event_box1">
                <div className="event_title">
                    <h2>Upcoming Events</h2>
                </div>
                <div className="card_box">
                    {Data.map(data => {
                        return (
                            <div className="card">
                                <div className="images">
                                    <img src={GandhiJayanti} alt="" />
                                </div>
                                <div className="description">
                                    <div className="title">{data.title}</div>
                                    <div className="author">{data.author}</div>
                                    <div className="timing">{data.time}</div>
                                    <div className="details">{data.details}</div>

                                </div>
                            </div>

                        )
                    })}

                </div>
                {/* <a href="#" className='read'>Read more</a> */}
            </div>
            <div className="event_box2">
                <div className="event_title">
                    <h2>Past Events</h2>
                </div>
                <div className="card_box">
                    {Data.map(data => {
                        return (
                            <div className="card">
                                <div className="images">
                                    <img src={GandhiJayanti} alt="" />
                                </div>
                                <div className="description">
                                    <div className="title">{data.title}</div>
                                    <div className="author">{data.author}</div>
                                    <div className="timing">{data.time}</div>
                                    <div className="details">{data.details}</div>

                                </div>
                            </div>

                        )
                    })}

                </div>
            </div>
        </section>

    )
}

export default Events
