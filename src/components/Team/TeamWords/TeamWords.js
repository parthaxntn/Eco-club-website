import React from 'react'
import director from '../../../Assets/director.svg' 
import deansw from '../../../Assets/deansw.svg'
import facultyadv from '../../../Assets/facultyadv.svg'
import '../TeamWords/TeamWords.css'

const TeamWords = () => {
    return (
        <div className="containerT">
            <div className="container1">
                <div className="container1-left">
                    <h3 className="from">From Director's Desk</h3>
                    <img className="img1" src={director} alt="#"/>
                    <h3 className="from">Sivaji Bandyopadhyay</h3>
                    <h4 id="designation1">Director , NIT SILCHAR</h4>
                </div>

                <div className="container1-right" style={{"fontWeight" :'500'}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis perspiciatis, soluta, quasi quam ut
                    itaque cum tempore possimus vitae minima eligendi impedit doloribus quae quos laudantium. Libero commodi
                    consequuntur sequi, a ipsa suscipit quam quibusdam? Tempora aliquam repellendus eligendi tenetur
                    provident, nisi aliquid recusandae suscipit, minima consectetur, ipsa reiciendis voluptates!
                </div>
            </div>

            <div className="container2">
                <div className="container2-left"  style={{"fontWeight" :'500'}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis perspiciatis, soluta, quasi quam ut
                    itaque cum tempore possimus vitae minima eligendi impedit doloribus quae quos laudantium. Libero commodi
                    consequuntur sequi, a ipsa suscipit quam quibusdam? Tempora aliquam repellendus eligendi tenetur
                    provident, nisi aliquid recusandae suscipit, minima consectetur, ipsa reiciendis voluptates!
                </div>
                <div className="container2-right">
                    <h3 className="from">From Dean SW's Desk</h3>
                    <img className="img2" src={deansw} alt="#"/>
                    <h3 className="from">Dr. Pranjit Barman</h3>
                    <h4 id="designation">Dean , SW</h4>
                </div>

            </div>

            <div className="container3">
                <div className="container3-left">
                    <h3 className="from">From Faculty Advisor's Desk</h3>
                    <img className="img1" src={facultyadv} alt="#"/>
                    <h3 className="from">Dr. Malaya Dutta Borah</h3>
                    <h4 id="designation1"> Faculty Advsior</h4>
                </div>

                <div className="container3-right"  style={{"fontWeight" :'500'}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis perspiciatis, soluta, quasi quam ut
                    itaque cum tempore possimus vitae minima eligendi impedit doloribus quae quos laudantium. Libero commodi
                    consequuntur sequi, a ipsa suscipit quam quibusdam? Tempora aliquam repellendus eligendi tenetur
                    provident, nisi aliquid recusandae suscipit, minima consectetur, ipsa reiciendis voluptates!
                </div>
            </div>
        </div>
    )
}

export default TeamWords