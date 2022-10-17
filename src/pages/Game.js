import React from "react";
import Header from "../layout/Header";
import Navbar from "../layout/Navbar";
import Schedule from "../component/schedule/Schedule";
const Game = (props) => {
  return (
    <React.Fragment>
      <Header></Header>
      <Schedule></Schedule>
      <Navbar navigate={props.navigate}></Navbar>
    </React.Fragment>
  );
};

export default Game;
