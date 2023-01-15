import React from 'react'
import director from '../../../Assets/director.svg' 
import deansw from '../../../Assets/deansw.svg'
import facultyadv from '../../../Assets/facultyadv.svg'
import '../TeamWords/TeamWords.css'
import TeamLeft from '../TeamLeft'
import TeamRight from '../TeamRight'
import TeamMembers from '../TeamMembers/TeamMembers'

const TeamWords = () => {

    const teamDetails = [
        {
            from: "From Director's Desk",
            name: "Sivaji Bandyopadhyay",
            designation: "Director , NIT SILCHAR",
            image: director,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis perspiciatis, soluta, quasi quam ut itaque cum tempore possimus vitae minima eligendi impedit doloribus quae quos laudantium. Libero commodi consequuntur sequi, a ipsa suscipit quam quibusdam? Tempora aliquam repellendus eligendi tenetur provident, nisi aliquid recusandae suscipit, minima consectetur, ipsa reiciendis voluptates!"
        },
        {
            from: "From Dean's Desk",
            name: "Dr. Pranjit Barman",
            designation: "Dean , SW",
            image: deansw,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis perspiciatis, soluta, quasi quam ut itaque cum tempore possimus vitae minima eligendi impedit doloribus quae quos laudantium. Libero commodi consequuntur sequi, a ipsa suscipit quam quibusdam? Tempora aliquam repellendus eligendi tenetur provident, nisi aliquid recusandae suscipit, minima consectetur, ipsa reiciendis voluptates!"
        },
        {
            from: "From Faculty Advisor's Desk",
            name: "Dr. Malaya Dutta Borah",
            designation: "Faculty Advisor",
            image: facultyadv,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis perspiciatis, soluta, quasi quam ut itaque cum tempore possimus vitae minima eligendi impedit doloribus quae quos laudantium. Libero commodi consequuntur sequi, a ipsa suscipit quam quibusdam? Tempora aliquam repellendus eligendi tenetur provident, nisi aliquid recusandae suscipit, minima consectetur, ipsa reiciendis voluptates!"
        }
    ]

    return (
        <div className="containerT">

            {teamDetails.map((teamDetail,i) => {
                if (i%2 === 0) {
                    return(
                        <TeamLeft from={teamDetail.from} name={teamDetail.name} designation={teamDetail.designation} image={teamDetail.image} description={teamDetail.description}/>
                        )
                    } else {
                        return (
                        <TeamRight from={teamDetail.from} name={teamDetail.name} designation={teamDetail.designation} image={teamDetail.image} description={teamDetail.description}/>
                    )
                }
            })}
            
            <TeamMembers/>

        </div>
    )
}

export default TeamWords