import React from "react"
import { useSelector } from "react-redux"
import "./Profile.css"
const Profile3 = (props) => {
  let state = useSelector((state) =>state )
  return (

    <React.Fragment>
  <div className="news1">
    <div className='topnews_title'>
    {state.profile[2].title}
    </div>
    <div className="profile">
      <div className="profile_image">
      <img src={process.env.PUBLIC_URL + '/img/중앙일보.png'} class="reporter_avatar"/>

      </div>
      <div className="reporter"> 
      <div className="reporter_name">
      {state.profile[2].name}
          </div>
      </div>
    <div className="news_time">
    {state.profile[2].time}
      </div>
      </div>
    </div>
 </React.Fragment>

)
}

export default Profile3;