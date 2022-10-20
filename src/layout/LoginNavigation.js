import React from "react";

import classes from "./LoginNavigation.module.css";
import Button from "../UI/Button";
const LoginNavigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <Button onClick={props.onLogout}>Logout</Button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default React.memo(LoginNavigation);
