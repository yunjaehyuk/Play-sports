import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faGamepad,faHouse } from "@fortawesome/free-solid-svg-icons";
import classes from './Navbar.module.css'
const Navbar = (props) => {
  return (
    <div>
          <div className={classes.Navbar}>
            <div className={classes.Navbar_Button}onClick={()=>{{props.navigate('/')}}}>
            <FontAwesomeIcon icon={faHouse} size="3x"/>
            <div>Home</div>
            </div>
            <div  className={classes.Navbar_Button}onClick={()=>{{props.navigate('/Game')}}}>
            <FontAwesomeIcon icon={faGamepad} size = '3x'/>
            <div>Game</div>
            </div>
            <div  className={classes.Navbar_Button}onClick={()=>{{props.navigate('/More')}}}>
            <FontAwesomeIcon icon={faBars} size = '3x'/>
            <div>More</div>
            </div>
         </div>
    </div>
  )
}

export default Navbar