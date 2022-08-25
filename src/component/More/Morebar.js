import React from "react"
import classes from './Morebar.module.css'
import Card from "../../UI/Card"
import Button from "../../UI/Button"
const Morebar = (props) => {
  return (
    <Card>
    <div className={classes.more}>
<div className={classes['more-title']}>Favourites
  <Button onClick={()=>{props.navigate('/Calendar')}}> Calendar</Button>
</div>
<div className={classes['more-league']}>
  <div className={classes.league} onClick={()=>{props.navigate('/epl')}}>
<div className={classes['league-icon']}>
<img src={process.env.PUBLIC_URL + '/img/Eplicon.png'} />
</div>
  <div className={classes['league-name']}>English Premier League</div>
</div>
</div>
<div className={classes.league} onClick={()=>{props.navigate('/LaLiga')}}>
  <div className={classes['league-icon']}>
  <img src={process.env.PUBLIC_URL + '/img/LaLigaicon.png'} />
  </div>
  <div className={classes['league-name']}> Spanish League</div>
</div>
<div className={classes.league} onClick={()=>{props.navigate('/Bundes')}}>
<div className={classes['league-icon']}>
<img src={process.env.PUBLIC_URL + '/img/Bundes.png'} />
</div>
  <div className={classes['league-name']}>German Bundesliga</div>
</div>
<div className={classes.league} onClick={()=>{props.navigate('/SerieA')}}>
<div className={classes['league-icon']}>
<img src={process.env.PUBLIC_URL + '/img/SerieAicon.png'} />
</div>
  <div className={classes['league-name']}>Italian Serie A</div>
</div>
</div>
    </Card>
  )
}

export default Morebar;