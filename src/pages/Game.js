import React from "react";
import Header from "../layout/Header";
import Navbar from "../layout/Navbar";
import Score from "../component/Score/Score";
const Game = (props) => {
return(

  <React.Fragment>
<Header></Header>
<Score></Score>
<Navbar navigate={props.navigate}></Navbar>

</React.Fragment>
)
}

export default Game;