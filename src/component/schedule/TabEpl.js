import React from "react";
import Card from "../../UI/Card";
import styles from "./Tab.module.css";

const Tab = () => {
  return (
    <Card>
      <div className={styles.Tab_games}>
        <div className={styles.Tab_name}>English Premier League</div>
        <div className={styles.Tab_game}>
          <div className={styles.Tab_team}>Tottenham</div>
          <div>1</div>
        </div>
        <div className={styles.Tab_game}>
          <div className={styles.Tab_team}>Wolves</div>
          <div lassName={styles.Tab_team}>0</div>
        </div>
      </div>
      <div className={styles.Tab_games}>
        <div className={styles.Tab_name}>English Premier League</div>
        <div className={styles.Tab_game}>
          <div className={styles.Tab_team}>Bournemouth</div>
          <div>0</div>
        </div>
        <div className={styles.Tab_game}>
          <div className={styles.Tab_team}>Aresenal</div>
          <div className={styles.Tab_score}>3</div>
        </div>
      </div>
      <div className={styles.Tab_games}>
        <div className={styles.Tab_name}>English Premier League</div>
        <div className={styles.Tab_game}>
          <div className={styles.Tab_team}>C Palace</div>
          <div>3</div>
        </div>
        <div className={styles.Tab_game}>
          <div className={styles.Tab_team}>Aston Villa</div>
          <div className={styles.Tab_score}>1</div>
        </div>
      </div>

      <div className={styles.Tab_games}>
        <div className={styles.Tab_name}>English Premier League</div>
        <div className={styles.Tab_game}>
          <div className={styles.Tab_team}>Everton</div>
          <div>1</div>
        </div>
        <div className={styles.Tab_game}>
          <div className={styles.Tab_team}>Nottm Forest</div>
          <div lassName={styles.Tab_team}>1</div>
        </div>
      </div>

      <div className={styles.Tab_gAME}>
        <div className={styles.Tab_name}>English Premier League</div>
        <div className={styles.Tab_game}>
          <div className={styles.Tab_team}>Fulham</div>
          <div>3</div>
        </div>
        <div className={styles.Tab_game}>
          <div className={styles.Tab_team}>Brentford</div>
          <div className={styles.Tab_team}>2</div>
        </div>
      </div>

      <div></div>
    </Card>
  );
};

export default Tab;
