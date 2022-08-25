import React from "react"
import Card from "../../UI/Card"
import Button from "../../UI/Button"
import classes from './TabEpl.module.css';

const TabSerieA = (props) => {
  return (
    <div className={classes.TabEpl}>
      <Card>
<div className={classes['more-title']}>
</div>

<div className={classes.TabEpl_games}>

  <div className={classes['TabEpl_name']}>Italian SerieA</div>
  <div className={classes['TabEpl_game']}>
    <div className={classes['TabEpl_team']}>Torino</div>
    <div>0</div>
  </div>
  <div className={classes['TabEpl_game']}>
  <div className={classes['TabEpl_team']}>Lazio</div>
  <div lassName={classes['TabEpl_team']}>0</div>
    </div>
</div>
<div className={classes.TabEpl_games}>

<div className={classes['TabEpl_name']}>Italian SerieA</div>
<div className={classes['TabEpl_game']}>
  <div className={classes['TabEpl_team']}>Udinese</div>
  <div>0</div>
</div>
<div className={classes['TabEpl_game']}>
<div className={classes['TabEpl_team']}>Salernitana</div>
<div lassName={classes['TabEpl_score']}>0</div>
  </div>
</div>
<div className={classes.TabEpl_games}>

<div className={classes['TabEpl_name']}>Italian SerieA</div>
  <div className={classes['TabEpl_game']}>
    <div className={classes['TabEpl_team']}>Inter Milian</div>
    <div>3</div>
  </div>
  <div className={classes['TabEpl_game']}>
  <div className={classes['TabEpl_team']}>Spezia</div>
  <div lassName={classes['TabEpl_score']}>0</div>
    </div>
</div>

<div className={classes.TabEpl_games}>
<div className={classes['TabEpl_name']}>Italian SerieA</div>
  <div className={classes['TabEpl_game']}>
    <div className={classes['TabEpl_team']}>Sassuolo</div>
    <div>1</div>
  </div>
  <div className={classes['TabEpl_game']}>
  <div className={classes['TabEpl_team']}>Lecce</div>
  <div lassName={classes['TabEpl_team']}>0</div>
    </div>
</div>




  <div>

  </div>
  
    </Card>
</div>
  )
}

export default TabSerieA;