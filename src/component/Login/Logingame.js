import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Logingame.module.css'
const Logingame = ({ authService }) => {
  const navigate = useNavigate();
  const goToMaker = userId => {
   navigate('/Login', {state:{id:userId}} )
  };
  const onLogin = event => {
    authService //
      .login(event.currentTarget.textContent)
      .then(data => goToMaker(data.user.uid));
  };
  useEffect(() => {
    authService.onAuthChange(user => {
      user && goToMaker(user.id);
    });
  });
  return (
    <section className={styles.login}>
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Logingame;
