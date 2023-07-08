const TeamRight = (props) => {
    return (
        <div className="container2">
            <div className="container2-left" style={{ "fontWeight": '500' }}>
                {props.description}
            </div>
            <div className="container2-right">
                <h3 className="from">From Dean SW's Desk</h3>
                <img className="img2" src={props.image} alt="#" />
                <h3 className="from">{props.name}</h3>
                <h4 id="designation">Dean , SW</h4>
            </div>

        </div>
    )
}

export default TeamRight
