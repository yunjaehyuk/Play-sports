import React from "react";
import { useSelector } from "react-redux";
import styles from "./Profile.module.css";
const Profile = () => {
  let state = useSelector((state) => state);
  return (
    <React.Fragment>
      <div>
        <div className={styles.news_title}>{state.profile[0].title}</div>
        <div className={styles.profile}>
          {state.profile[0].image}
          <div className={styles.reporter}>
            <div className={styles.reporter_name}>{state.profile[0].name}</div>
          </div>
          <div className={styles.time}>{state.profile[0].time}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
