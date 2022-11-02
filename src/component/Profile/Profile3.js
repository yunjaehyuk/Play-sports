import React from "react";
import { useSelector } from "react-redux";
import styles from "./Profile.module.css";
const Profile3 = () => {
  let state = useSelector((state) => state);
  return (
    <React.Fragment>
      <div>
        <div className={styles.news_title}>{state.profile[3].title}</div>
        <div className={styles.profile}>
          <div className={styles.reporter}>
            <img
              src={process.env.PUBLIC_URL + "/img/중앙일보.png"}
              className={styles.reporter_avatar}
              alt="avatar"
            />
            <div className={styles.reporter_name}>{state.profile[3].name}</div>
          </div>
          <div className={styles.time}>{state.profile[3].time}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile3;
