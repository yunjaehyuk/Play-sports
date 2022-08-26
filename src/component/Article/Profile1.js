import React from "react"
import { useSelector } from "react-redux"
const Profile = (props) => {
  let state = useSelector((state) =>state )
  return (

    <React.Fragment>
  <div>
    <div className='topnews_title'>
    {state.profile[0].title}
    </div>
    <div className="profile">
    {state.profile[0].image}
      <div className="reporter"> 
      <div className="reporter_name">
      {state.profile[0].name}
          </div>
      </div>
    <div className="news_time">
    {state.profile[0].time}
      </div>
      </div>
    </div>
 </React.Fragment>

)
}

export default Profile