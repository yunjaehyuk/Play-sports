import React from "react";
import { useSelector } from "react-redux";
import styles from "./Profile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const Profile1 = () => {
  let state = useSelector((state) => state);
  return (
    <React.Fragment>
      <div>
        <div className={styles.news_title}>{state.profile[1].title}</div>
        <div className={styles.profile}>
          <FontAwesomeIcon icon={faUser} size="x" />
          <div className={styles.reporter}>
            <div className={styles.reporter_name}>{state.profile[1].name}</div>
          </div>
          <div className={styles.time}>{state.profile[1].time}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile1;
