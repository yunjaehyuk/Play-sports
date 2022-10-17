import React, { useState, useEffect } from "react";

import Loginform from "../component/login/Loginform";
import Logout from "../component/login/Logout";
import BackHeader from "../layout/BackHeader";

const Login = ({ authService }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storageLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storageLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <BackHeader />
      <main>
        {!isLoggedIn && (
          <Loginform authService={authService} onLogin={loginHandler} />
        )}
        {isLoggedIn && (
          <Logout isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
        )}
      </main>
    </React.Fragment>
  );
};

export default Login;
