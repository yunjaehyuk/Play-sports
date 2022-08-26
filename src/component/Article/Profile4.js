import React from "react"
import { useSelector } from "react-redux"
const Profile4 = (props) => {
  let state = useSelector((state) =>state )
  return (

    <React.Fragment>
  <div>
    <div className='topnews_title'>
    {state.profile[3].title}
    </div>
    <div className="profile">
    {state.profile[3].image}
      <div className="reporter"> 
      <div className="reporter_name">
      {state.profile[3].name}
          </div>
      </div>
    <div className="news_time">
    {state.profile[3].time}
      </div>
      </div>
    </div>
 </React.Fragment>

)
}

export default Profile4