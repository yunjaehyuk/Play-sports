import React, {useState} from "react";
import Card from "../../UI/Card";
import { Nav } from 'react-bootstrap'
import TabScore from "./TabScore";
import classes from './Score.module.css'
import Button from "../../UI/Button";
const Score = () => {
  let [tap ,setTap] = useState(0)
  return (
    <React.Fragment>

    <div className={classes.tap}>
    <Nav  variant="tabs" defaultActiveKey="link0">
    <div className={classes['tap_button']}>
    <Button eventKey="link0" onClick={() => {
      setTap(0)
      }}>EPL</Button>
    </div>
    <div className={classes['tap_button']}>
      <Button onClick={() => {
        setTap(1)
      }}
      eventKey="link1">LaLiga</Button>
    </div>
    <div className={classes['tap_button']}>
      <Button eventKey="link2" onClick={() => {
        setTap(2)
      }}>BundesLiga</Button>
    </div>
    <div className={classes['tap_button']}>
      <Button eventKey="link3" onClick={() => {
        setTap(3)
      }}>SerieA</Button>
    </div>
</Nav>
  </div>
<TabScore tap={tap}/>
      </React.Fragment>
      )
}
export default Score;