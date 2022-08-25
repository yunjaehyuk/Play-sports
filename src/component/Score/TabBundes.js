import React from "react"
import Card from "../../UI/Card"
import classes from './TabEpl.module.css';

const TabBundes = (props) => {
  return (
    <div className={classes.TabEpl}>
      <Card>
<div className={classes['more-title']}>
</div>

<div className={classes.TabEpl_games}>

  <div className={classes['TabEpl_name']}>Bundesliga</div>
  <div className={classes['TabEpl_game']}>
    <div className={classes['TabEpl_team']}>Leverkusen</div>
    <div>0</div>
  </div>
  <div className={classes['TabEpl_game']}>
  <div className={classes['TabEpl_team']}>Hoffenheim</div>
  <div lassName={classes['TabEpl_team']}>3</div>
    </div>
</div>
<div className={classes.TabEpl_games}>
<div className={classes['TabEpl_name']}>Bundesliga</div>

<div className={classes['TabEpl_game']}>
  <div className={classes['TabEpl_team']}>Dortmund</div>
  <div>2</div>
</div>
<div className={classes['TabEpl_game']}>
<div className={classes['TabEpl_team']}>Bremen</div>
<div lassName={classes['TabEpl_score']}>3
</div>
  </div>
</div>
<div className={classes.TabEpl_games}>
<div className={classes['TabEpl_name']}>Bundesliga</div>

  <div className={classes['TabEpl_game']}>
    <div className={classes['TabEpl_team']}>Augburg</div>
    <div>1</div>
  </div>
  <div className={classes['TabEpl_game']}>
  <div className={classes['TabEpl_team']}>Maniz</div>
  <div lassName={classes['TabEpl_score']}>2</div>
    </div>
</div>

<div className={classes.TabEpl_games}>
<div className={classes['TabEpl_name']}>Bundesliga</div>

  <div className={classes['TabEpl_game']}>
    <div className={classes['TabEpl_team']}>Stuffgart</div>
    <div>0</div>
  </div>
  <div className={classes['TabEpl_game']}>
  <div className={classes['TabEpl_team']}>Freiburg</div>
  <div lassName={classes['TabEpl_score']}>1</div>
    </div>
</div>

<div className={classes.TabEpl_games}>
<div className={classes['TabEpl_name']}>Bundesliga</div>

  <div className={classes['TabEpl_game']}>
    <div className={classes['TabEpl_team']}>Fulham</div>
    <div>0</div>
  </div>
  <div className={classes['TabEpl_game']}>
  <div className={classes['TabEpl_team']}>Wolfsbug</div>
  <div lassName={classes['TabEpl_score']}>0</div>
    </div>
</div>



  <div>

  </div>
  
    </Card>
</div>
  )
}

export default TabBundes;