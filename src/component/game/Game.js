import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import TabScore from "./TabScore";
import styles from "./Game.module.css";
import TapButton from "../../UI/TapButton";
const Schedule = () => {
  let [tap, setTap] = useState(0);
  return (
    <React.Fragment>
      <div className={styles.tap}>
        <Nav variant="tabs" defaultActiveKey="link0">
          <div className={styles.tap_button}>
            <TapButton
              eventKey="link0"
              onClick={() => {
                setTap(0);
              }}
            >
              EPL
            </TapButton>
          </div>
          <div className={styles.tap_button}>
            <TapButton
              onClick={() => {
                setTap(1);
              }}
              eventKey="link1"
            >
              LaLiga
            </TapButton>
          </div>
          <div className={styles.tap_button}>
            <TapButton
              eventKey="link2"
              onClick={() => {
                setTap(2);
              }}
            >
              BundesLiga
            </TapButton>
          </div>
          <div className={styles.tap_button}>
            <TapButton
              onClick={() => {
                setTap(3);
              }}
              eventKey="link3"
            >
              SerieA
            </TapButton>
          </div>
        </Nav>
      </div>

      <TabScore tap={tap} />
    </React.Fragment>
  );
};
export default Schedule;
