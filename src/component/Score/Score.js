import React, {useState} from "react";
import { Nav } from 'react-bootstrap'
import TabScore from "./TabScore";
import classes from './Score.module.css'
import TapButton from "../../UI/TapButton";
const Score = () => {
  let [tap ,setTap] = useState(0)
  return (
    <React.Fragment>

    <div  className={classes.tap}>
    <Nav  variant="tabs" defaultActiveKey="link0">
    <div className={classes['tap_button']}>
    <TapButton eventKey="link0" onClick={() => {
      setTap(0)
      }}>EPL</TapButton>
    </div>
    <div className={classes.tap_button}>
      <TapButton onClick={() => {
        setTap(1)
      }}
      eventKey="link1">LaLiga</TapButton>
    </div>
    <div className={classes['tap_button']}>
      <TapButton eventKey="link2" onClick={() => {
        setTap(2)
      }}>BundesLiga</TapButton>
    </div>
    <div className={classes['tap_button']}>
      <TapButton eventKey="link3" onClick={() => {
        setTap(3)
      }}>SerieA</TapButton>
    </div>
</Nav>
  </div>
<TabScore tap={tap}/>
      </React.Fragment>
      )
}
export default Score;