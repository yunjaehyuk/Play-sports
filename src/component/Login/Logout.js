import React from "react";
import LoginNavigation from "../../layout/LoginNavigation";

import Card from "../../UI/Card";
import classes from "./Logout.module.css";

const Logout = (props) => {
  return (
    <Card className={classes.home}>
      <LoginNavigation
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      />
    </Card>
  );
};

export default React.memo(Logout);
