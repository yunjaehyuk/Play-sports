import React from "react";
import Card from "../../UI/Card";
import styles from "./Tab.module.css";

const TabSerieA = () => {
  return (
    <Card className={styles.Tab}>
      <div className={styles.Tab_games}>
        <div className={styles.Tab_name}>Italian SerieA</div>
        <div className={styles.Tab_game}>
          <div className={styles.Tab_team}>Torino</div>
          <div>0</div>
        </div>
        <div className={styles.Tab_game}>
          <div className={styles.Tab_team}>Lazio</div>
          <div lassName={styles.Tab_team}>0</div>
        </div>
      </div>
      <div className={styles.Tab_games}>
        <div className={styles.Tab_name}>Italian SerieA</div>
        <div className={styles.Tab_game}>
          <div className={styles.Tab_team}>Udinese</div>
          <div>0</div>
        </div>
        <div className={styles.Tab_game}>
          <div className={styles.Tab_team}>Salernitana</div>
          <div lassName={styles.Tab_score}>0</div>
        </div>
      </div>
      <div className={styles.Tab_games}>
        <div className={styles.Tab_name}>Italian SerieA</div>
        <div className={styles.Tab_game}>
          <div className={styles.Tab_team}>Inter Milian</div>
          <div>3</div>
        </div>
        <div className={styles.Tab_game}>
          <div className={styles.Tab_team}>Spezia</div>
          <div lassName={styles.Tab_score}>0</div>
        </div>
      </div>

      <div className={styles.Tab_games}>
        <div className={styles.Tab_name}>Italian SerieA</div>
        <div className={styles.Tab_game}>
          <div className={styles.Tab_team}>Sassuolo</div>
          <div>1</div>
        </div>
        <div className={styles.Tab_game}>
          <div className={styles.Tab_team}>Lecce</div>
          <div lassName={styles.Tab_team}>0</div>
        </div>
      </div>

      <div></div>
    </Card>
  );
};

export default TabSerieA;
