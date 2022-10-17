import React from "react";
import styles from "./Morebar.module.css";
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import { useNavigate } from "react-router-dom";
const Morebar = () => {
  const navigate = useNavigate();
  return (
    <Card>
      <div className={styles.more}>
        <div className={styles.more_title}>
          Favourites
          <Button
            onClick={() => {
              navigate("/Calendar");
            }}
          >
            {" "}
            Calendar
          </Button>
        </div>
        <div className={styles.more_league}>
          <div
            className={styles.league}
            onClick={() => {
              navigate("/epl");
            }}
          >
            <div className={styles.league_icon}>
              <img
                src={process.env.PUBLIC_URL + "/img/Eplicon.png"}
                alt="EPL"
              />
            </div>
            <div className={styles.league_name}>English Premier League</div>
          </div>
        </div>
        <div
          className={styles.league}
          onClick={() => {
            navigate("/LaLiga");
          }}
        >
          <div className={styles.league_icon}>
            <img
              src={process.env.PUBLIC_URL + "/img/LaLigaicon.png"}
              alt="Laliga"
            />
          </div>
          <div className={styles.league_name}> Spanish League</div>
        </div>
        <div
          className={styles.league}
          onClick={() => {
            navigate("/Bundes");
          }}
        >
          <div className={styles.league_icon}>
            <img
              src={process.env.PUBLIC_URL + "/img/Bundes.png"}
              alt="Bundes"
            />
          </div>
          <div className={styles.league_name}>German Bundesliga</div>
        </div>
        <div
          className={styles.league}
          onClick={() => {
            navigate("/SerieA");
          }}
        >
          <div className={styles.league_icon}>
            <img
              src={process.env.PUBLIC_URL + "/img/SerieAicon.png"}
              alt="SerieA"
            />
          </div>
          <div className={styles.league_name}>Italian Serie A</div>
        </div>
      </div>
    </Card>
  );
};

export default Morebar;
