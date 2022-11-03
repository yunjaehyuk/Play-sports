import React from "react";
import Card from "../../UI/Card";
import styles from "./Tab.module.css";

const TabBundes = () => {
  return (
    <Card className={styles.Tab}>
      <div className={styles.Tab_games}>
        <div className={styles.Tab_name}>Bundesliga</div>
        <div className={styles.Tab_game}>
          <div className={styles.Tab_team}>Leverkusen</div>
          <div>0</div>
        </div>
        <div className={styles.Tab_game}>
          <div className={styles.Tab_team}>Hoffenheim</div>
          <div className={styles.Tab_team}>3</div>
        </div>
      </div>
      <div className={styles.Tab_games}>
        <div className={styles.Tab_name}>Bundesliga</div>

        <div className={styles.Tab_game}>
          <div className={styles.Tab_team}>Dortmund</div>
          <div>2</div>
        </div>
        <div className={styles.Tab_game}>
          <div className={styles.Tab_team}>Bremen</div>
          <div className={styles.Tab_score}>3</div>
        </div>
      </div>
      <div className={styles.Tab_games}>
        <div className={styles.Tab_name}>Bundesliga</div>

        <div className={styles.Tab_game}>
          <div className={styles.Tab_team}>Augburg</div>
          <div>1</div>
        </div>
        <div className={styles.Tab_game}>
          <div className={styles.Tab_team}>Maniz</div>
          <div className={styles.Tab_score}>2</div>
        </div>
      </div>

      <div className={styles.Tab_games}>
        <div className={styles.Tab_name}>Bundesliga</div>

        <div className={styles.Tab_game}>
          <div className={styles.Tab_team}>Stuffgart</div>
          <div>0</div>
        </div>
        <div className={styles.Tab_game}>
          <div className={styles.Tab_team}>Freiburg</div>
          <div className={styles.Tab_score}>1</div>
        </div>
      </div>

      <div className={styles.Tab_games}>
        <div className={styles.Tab_name}>Bundesliga</div>

        <div className={styles.Tab_game}>
          <div className={styles.Tab_team}>Fulham</div>
          <div>0</div>
        </div>
        <div className={styles.Tab_game}>
          <div className={styles.Tab_team}>Wolfsbug</div>
          <div className={styles.Tab_score}>0</div>
        </div>
      </div>

      <div></div>
    </Card>
  );
};

export default TabBundes;
