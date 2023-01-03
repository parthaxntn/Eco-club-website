import React from 'react'

const TeamLeft = (props) => {
    return (
        <div className='d-flex'>
                <div className="container1-left">
                    <h3 className="from">{props.from}</h3>
                    <img className="img1" src={props.image} alt="#" />
                    <h3 className="from">{props.name}</h3>
                    <h4 id="designation1">{props.designation}</h4>
                </div>
                <div className="container1-right" style={{ "fontWeight": '500' }}>
                    {props.description}
                </div>
        </div>
    )
}

export default TeamLeft
