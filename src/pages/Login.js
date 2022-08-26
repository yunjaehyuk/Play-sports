import React, { useState, useEffect } from 'react';

import Loginform from '../component/Login/Loginform';
import LoginHeader from '../layout/LoginHeader';
import Logout from '../component/Login/Logout';
const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


useEffect (()=> {
 const storageLoggedInInformation = localStorage.getItem('isLoggedIn')
  if(storageLoggedInInformation ===  '1') {
    setIsLoggedIn(true)
  }
},[])
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1')
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
    <LoginHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Loginform onLogin={loginHandler} />}
        {isLoggedIn && <Logout isAuthenticated={isLoggedIn} onLogout={logoutHandler}/>}
      </main>
    </React.Fragment>
  );
}


export default Login;
