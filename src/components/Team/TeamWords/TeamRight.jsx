const TeamRight = (props) => {
    return (
        <div className="container2">
            <div className="container2-left" style={{ "fontWeight": '500' }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis perspiciatis, soluta, quasi quam ut
                itaque cum tempore possimus vitae minima eligendi impedit doloribus quae quos laudantium. Libero commodi
                consequuntur sequi, a ipsa suscipit quam quibusdam? Tempora aliquam repellendus eligendi tenetur
                provident, nisi aliquid recusandae suscipit, minima consectetur, ipsa reiciendis voluptates!
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
