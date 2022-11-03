import React from "react";
import { useSelector } from "react-redux";
import styles from "./Profile.module.css";
const Profile2 = () => {
  let state = useSelector((state) => state);
  return (
    <React.Fragment>
      <div>
        <div className={styles.news_title}>{state.profile[2].title}</div>
        <div className={styles.profile}>
          <img src={process.env.PUBLIC_URL + "/img/mancity_logo.jpg"} />
          <div className={styles.reporter}>
            <div className={styles.reporter_name}>{state.profile[2].name}</div>
          </div>
          <div className={styles.time}>{state.profile[2].time}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile2;
