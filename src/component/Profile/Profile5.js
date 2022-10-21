import React from "react";
import styles from "./Profile.module.css";
import { useSelector } from "react-redux";
const Profile5 = () => {
  let state = useSelector((state) => state);
  return (
    <React.Fragment>
      <div>
        <div className={styles.news_title}>{state.profile[5].title}</div>
        <div className={styles.profile}>
          {state.profile[5].image}
          <div className={styles.reporter}>
            <div className={styles.reporter_name}>{state.profile[5].name}</div>
          </div>
          <div className={styles.time}>{state.profile[5].time}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile5;