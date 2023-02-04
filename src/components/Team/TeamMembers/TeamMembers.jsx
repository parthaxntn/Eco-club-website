import { useState } from "react";
import MemberCalling from "./MemberCalling.jsx";
import "./TeamMembers.css"
import twentyTwo from "./Members/TwentyTwo.js";
import twentyOne from "./Members/TwentyOne.js";
import twenty from "./Members/Twenty.js";
import nineteen from "./Members/Nineteen.js";
import eighteen from "./Members/Eighteen.js";

const TeamMembers = () => {
    const year = ["2021-2022", "2020-2021", "2019-2020", "2018-2019", "2017-2018"];
    const [active, setActive] = useState(year[0]);
    return(
        <div className="member-container">
            <h3 className="student">Student Members</h3>
            <div className="activeYear mt-3">
                {year.map((item) => {
                    return(
                        <div
                            key = {item.id}
                            onClick = {() => setActive(item)}
                            className = {`${active === item && "active"}`}
                            >
                                {item}
                        </div>
                    )
                })}
            </div>
            <div className="member-main-content">
                {active === year[0] && twentyTwo.map((data, key) => {
                    return(
                        <MemberCalling data={data}/>
                    )
                })}  
                {active === year[1] && twentyOne.map((data, key) => {
                    return(
                        <MemberCalling data={data}/>
                    )
                })}  
                {active === year[2] && twenty.map((data, key) => {
                    return(
                        <MemberCalling data={data}/>
                    )
                })}  
                {active === year[3] && nineteen.map((data, key) => {
                    return(
                        <MemberCalling data={data}/>
                    )
                })}  
                {active === year[4] && eighteen.map((data, key) => {
                    return(
                        <MemberCalling data={data}/>
                    )
                })}  
            </div>
        </div>
    )
}

export default TeamMembers