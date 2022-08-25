import React from "react"
import Card from "../../UI/Card"
import Button from "../../UI/Button"
import classes from './TabEpl.module.css';

const TabEpl = (props) => {
  return (
    <div className={classes.TabEpl}>
      <Card>
<div className={classes['more-title']}>
</div>

<div className={classes.TabEpl_games}>

  <div className={classes['TabEpl_name']}>English Premier League</div>
  <div className={classes['TabEpl_game']}>
    <div className={classes['TabEpl_team']}>Tottenham</div>
    <div>1</div>
  </div>
  <div className={classes['TabEpl_game']}>
  <div className={classes['TabEpl_team']}>Wolves</div>
  <div lassName={classes['TabEpl_team']}>0</div>
    </div>
</div>
<div className={classes.TabEpl_games}>

<div className={classes['TabEpl_name']}>English Premier League</div>
<div className={classes['TabEpl_game']}>
  <div className={classes['TabEpl_team']}>Bournemouth</div>
  <div>0</div>
</div>
<div className={classes['TabEpl_game']}>
<div className={classes['TabEpl_team']}>Aresenal</div>
<div lassName={classes['TabEpl_score']}>3</div>
  </div>
</div>
<div className={classes.TabEpl_games}>

  <div className={classes['TabEpl_name']}>English Premier League</div>
  <div className={classes['TabEpl_game']}>
    <div className={classes['TabEpl_team']}>C Palace</div>
    <div>3</div>
  </div>
  <div className={classes['TabEpl_game']}>
  <div className={classes['TabEpl_team']}>Aston Villa</div>
  <div lassName={classes['TabEpl_score']}>1</div>
    </div>
</div>

<div className={classes.TabEpl_games}>
  <div className={classes['TabEpl_name']}>English Premier League</div>
  <div className={classes['TabEpl_game']}>
    <div className={classes['TabEpl_team']}>Everton</div>
    <div>1</div>
  </div>
  <div className={classes['TabEpl_game']}>
  <div className={classes['TabEpl_team']}>Nottm Forest</div>
  <div lassName={classes['TabEpl_team']}>1</div>
    </div>
</div>

<div className={classes.TabEpl_games}>
  <div className={classes['TabEpl_name']}>English Premier League</div>
  <div className={classes['TabEpl_game']}>
    <div className={classes['TabEpl_team']}>Fulham</div>
    <div>3</div>
  </div>
  <div className={classes['TabEpl_game']}>
  <div className={classes['TabEpl_team']}>Brentford</div>
  <div lassName={classes['TabEpl_team']}>2</div>
    </div>
</div>



  <div>

  </div>
  
    </Card>
</div>
  )
}

export default TabEpl;