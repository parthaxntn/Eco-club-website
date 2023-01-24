import React from "react";
import "./MemberCalling.css"

const MemberCalling = ({data}) => {
    console.log(data)
    return (
        <div className="mem-container1">
            <div className="img-container">
                <img src={data.src.logo} alt="placeholder" className="prof-pic"/>
            </div>
            <div className="mem-cont-bottom">
                <h4>{data.name}</h4>
                <p>{data.desig}</p>
            </div>
        </div>
    )
}   

export default MemberCalling