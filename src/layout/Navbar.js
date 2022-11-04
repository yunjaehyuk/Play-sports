import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGamepad, faHouse } from "@fortawesome/free-solid-svg-icons";

import styles from "./Navbar.module.css";
import { TiHome } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.game}>
      <div className={styles.Navbar}>
        <div
          className={styles.Navbar_Button}
          onClick={() => {
            {
              navigate("/");
            }
          }}
        >
          <TiHome size="52" />
          <div>Home</div>
        </div>
        <div
          className={styles.Navbar_Button}
          onClick={() => {
            {
              navigate("/Game");
            }
          }}
        >
          <FontAwesomeIcon
            className={styles.Navbar_Buttons}
            icon={faGamepad}
            size="3x"
          />
          <div>Game</div>
        </div>
        <div
          className={styles.Navbar_Button}
          onClick={() => {
            {
              navigate("/More");
            }
          }}
        >
          <FontAwesomeIcon icon={faBars} size="3x" />
          <div>More</div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Navbar);
