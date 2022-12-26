import React from 'react'
import TeamHeadPhoto from '../../components/Team/TeamHeadPhoto/TeamHeadPhoto'
import TeamWords from '../../components/Team/TeamWords/TeamWords'
import "../Team/Team.css"

const Team = () => {
  return (
    <div className='bodyT'>
      <TeamHeadPhoto/>
      <TeamWords/>
    </div>
  )
}

export default Team
