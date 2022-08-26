import React from "react"
import "./Profile.css"
import { useSelector } from "react-redux"
const Profile5 = (props) => {
  let state = useSelector((state) =>state )
  return (

    <React.Fragment>
  <div>
    <div className='topnews_title'>
    {state.profile[4].title}
    </div>
    <div className="profile">
    {state.profile[4].image}
      <div className="reporter"> 
      <div className="reporter_name">
      {state.profile[4].name}
          </div>
      </div>
    <div className="news_time">
    {state.profile[4].time}
      </div>
      </div>
    </div>
 </React.Fragment>

)
}

export default Profile5