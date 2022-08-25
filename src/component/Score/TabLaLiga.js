import React from "react"
import Card from "../../UI/Card"
import Button from "../../UI/Button"
import classes from './TabEpl.module.css';

const TabLaLiga = (props) => {
  return (
    <div className={classes.TabEpl}>
      <Card>
<div className={classes['more-title']}>
</div>

<div className={classes.TabEpl_games}>

  <div className={classes['TabEpl_name']}>Spanish LaLiga</div>
  <div className={classes['TabEpl_game']}>
    <div className={classes['TabEpl_team']}>Osasuna</div>
    <div>2</div>
  </div>
  <div className={classes['TabEpl_game']}>
  <div className={classes['TabEpl_team']}>Cadiz</div>
  <div lassName={classes['TabEpl_team']}>0</div>
    </div>
</div>
<div className={classes.TabEpl_games}>

<div className={classes['TabEpl_name']}>Spanish LaLiga</div>
<div className={classes['TabEpl_game']}>
  <div className={classes['TabEpl_team']}>Mallorca</div>
  <div>1</div>
</div>
<div className={classes['TabEpl_game']}>
<div className={classes['TabEpl_team']}>Betis</div>
<div lassName={classes['TabEpl_score']}>2</div>
  </div>
</div>
<div className={classes.TabEpl_games}>

<div className={classes['TabEpl_name']}>Spanish LaLiga</div>
  <div className={classes['TabEpl_game']}>
    <div className={classes['TabEpl_team']}>Celta Vigo</div>
    <div>1</div>
  </div>
  <div className={classes['TabEpl_game']}>
  <div className={classes['TabEpl_team']}>Real Madrid</div>
  <div lassName={classes['TabEpl_score']}>4</div>
    </div>
</div>



  <div>

  </div>
  
    </Card>
</div>
  )
}

export default TabLaLiga;