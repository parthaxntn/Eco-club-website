import React from "react";

const MemberCalling = ({data}) => {
    console.log(data)
    return (
        <div className="mem-container">
            <img src={data.src} alt="placeholder" className="prof-pic"/>
            <div className="mem-cont-bottom">
                <h4>{data.name}</h4>
                <p style={{"fontSize":"1.2rem"}}>{data.desig}</p>
            </div>
        </div>
    )
}   

export default MemberCalling