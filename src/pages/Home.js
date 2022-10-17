import React from "react";
import Header from '../layout/Header'
import Navbar from "../layout/Navbar";
import HomeNews from '../component/homenews/HomeNews'
import { useNavigate } from "react-router-dom";
const Home = () => {
  let navigate = useNavigate();

  return (
    <React.Fragment className="main"> 
        <Header/>
        <HomeNews/>
        <Navbar navigate={navigate}/>
       
      </React.Fragment>
    )
}

export default Home;