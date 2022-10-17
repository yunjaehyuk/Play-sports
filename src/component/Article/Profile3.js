import React from "react";
import { useSelector } from "react-redux";
import styles from "./Profile.module.css";
const Profile3 = () => {
  let state = useSelector((state) => state);
  return (
    <React.Fragment>
      <div>
        <div className={styles.news_title}>{state.profile[2].title}</div>
        <div className={styles.profile}>
          <div className={styles.profile_image}>
            <img
              src={process.env.PUBLIC_URL + "/img/중앙일보.png"}
              class="reporter_avatar"
              alt="avatar"
            />
          </div>
          <div className={styles.reporter}>
            <div className={styles.reporter_name}>{state.profile[2].name}</div>
          </div>
          <div className={styles.time}>{state.profile[2].time}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile3;
