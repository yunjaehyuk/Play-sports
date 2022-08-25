import React from "react";
import Header from "../layout/Header";
import Morebar from "../component/More/Morebar"
import Navbar from "../layout/Navbar";
const More = (props) => {
return(

  <React.Fragment>
<Header></Header>
<Morebar navigate={props.navigate}></Morebar>
<Navbar navigate={props.navigate}></Navbar>

</React.Fragment>
)
}

export default More;