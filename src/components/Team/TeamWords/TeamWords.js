import React from 'react'
import director from '../../../Assets/director.svg' 
import deansw from '../../../Assets/deansw.svg'
import facultyadv from '../../../Assets/facultyadv.svg'

const TeamWords = () => {
    return (
        <div class="container">
            <div class="container1">
                <div class="container1-left">
                    <h3 class="from">From Director's Desk</h3>
                    <img class="img1" src={director} alt="#"/>
                    <h3 class="from">Sivaji Bandyopadhyay</h3>
                    <h4 id="designation1">Director , NIT SILCHAR</h4>
                </div>

                <div class="container1-right">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis perspiciatis, soluta, quasi quam ut
                    itaque cum tempore possimus vitae minima eligendi impedit doloribus quae quos laudantium. Libero commodi
                    consequuntur sequi, a ipsa suscipit quam quibusdam? Tempora aliquam repellendus eligendi tenetur
                    provident, nisi aliquid recusandae suscipit, minima consectetur, ipsa reiciendis voluptates!
                </div>
            </div>

            <div class="container2">
                <div class="container2-left">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis perspiciatis, soluta, quasi quam ut
                    itaque cum tempore possimus vitae minima eligendi impedit doloribus quae quos laudantium. Libero commodi
                    consequuntur sequi, a ipsa suscipit quam quibusdam? Tempora aliquam repellendus eligendi tenetur
                    provident, nisi aliquid recusandae suscipit, minima consectetur, ipsa reiciendis voluptates!
                </div>
                <div class="container2-right">
                    <h3 class="from">From Dean SW's Desk</h3>
                    <img class="img2" src={deansw} alt="#"/>
                    <h3 class="from">Dr. Pranjit Barman</h3>
                    <h4 id="designation">Dean , SW</h4>
                </div>

            </div>

            <div class="container3">
                <div class="container3-left">
                    <h3 class="from">From Faculty Advisor's Desk</h3>
                    <img class="img1" src={facultyadv} alt="#"/>
                    <h3 class="from">Dr. Malaya Dutta Borah</h3>
                    <h4 id="designation1"> Faculty Advsior</h4>
                </div>

                <div class="container3-right">
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