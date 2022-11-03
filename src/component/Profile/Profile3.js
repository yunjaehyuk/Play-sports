import React from "react";
import { useSelector } from "react-redux";
import styles from "./Profile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const Profile3 = () => {
  let state = useSelector((state) => state);
  return (
    <React.Fragment>
      <div>
        <div className={styles.news_title}>{state.profile[3].title}</div>
        <div className={styles.profile}>
          <div className={styles.reporter}>
            <FontAwesomeIcon icon={faUser} size="x" />
            <div className={styles.reporter_name}>{state.profile[3].name}</div>
          </div>
          <div className={styles.time}>{state.profile[3].time}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile3;
