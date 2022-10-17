import React from "react";
import Header from "../layout/Header";
import Morebar from "../component/more/Morebar";
import Navbar from "../layout/Navbar";
const More = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Morebar navigate={props.navigate} />
      <Navbar navigate={props.navigate} />
    </React.Fragment>
  );
};

export default More;
