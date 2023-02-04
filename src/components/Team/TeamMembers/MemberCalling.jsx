import "./MemberCalling.css"

const MemberCalling = ({data}) => {
    return (
        <div className="mem-container1">
            <div className="img-container">
                <img src={data.src.logo} alt="placeholder" className="prof-pic"/>
            </div>
            <div className="mem-cont-bottom">
                <h5>{data.name}</h5>
                <p>{data.desig}</p>
            </div>
        </div>
    )
}   

export default MemberCalling