import React from "react";
import Button from "../UI/Button";
import Header from '../layout/Header'
import Navbar from "../layout/Navbar";
import HomeNews from '../component/HomeNews/HomeNews'
import { useNavigate } from "react-router-dom";
const Home = () => {
  let navigate = useNavigate();

  return (
    <React.Fragment className="main"> 
        <Header></Header>
        <HomeNews/>
        <Navbar navigate={navigate}/>
       
      </React.Fragment>
    )
}

export default Home;