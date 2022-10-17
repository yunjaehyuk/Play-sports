import React from "react";
import Card from "../../UI/Card";
import styles from "./Tab.module.css";

const TabLaLiga = () => {
  return (
    <Card>
      <div className={styles.Tab_games}>
        <div className={styles.Tab_name}>Spanish LaLiga</div>
        <div className={styles.Tab_game}>
          <div className={styles.Tab_team}>Osasuna</div>
          <div>2</div>
        </div>
        <div className={styles.Tab_game}>
          <div className={styles.Tab_team}>Cadiz</div>
          <div lassName={styles.Tab_team}>0</div>
        </div>
      </div>
      <div className={styles.Tab_games}>
        <div className={styles.Tab_name}>Spanish LaLiga</div>
        <div className={styles.Tab_game}>
          <div className={styles.Tab_team}>Mallorca</div>
          <div>1</div>
        </div>
        <div className={styles.Tab_game}>
          <div className={styles.Tab_team}>Betis</div>
          <div lassName={styles.Tab_score}>2</div>
        </div>
      </div>
      <div className={styles.Tab_games}>
        <div className={styles.Tab_name}>Spanish LaLiga</div>
        <div className={styles.Tab_game}>
          <div className={styles.Tab_team}>Celta Vigo</div>
          <div>1</div>
        </div>
        <div className={styles.Tab_game}>
          <div className={styles.Tab_team}>Real Madrid</div>
          <div className={styles.Tab_score}>4</div>
        </div>
      </div>

      <div></div>
    </Card>
  );
};

export default TabLaLiga;
