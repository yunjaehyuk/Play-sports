import React, { useState } from "react";
import TableEpl from "../component/Table/TableEpl";
import Card from "../UI/Card";
import TableFilter from "../component/Table/TableFilter";
import Navbar from "../layout/Navbar";
import BackHeader from "../layout/BackHeader";
function Epl(props) {
  return (
    <React.Fragment>
      <Card>
        <BackHeader navigate={props.navigate}></BackHeader>
        <TableFilter></TableFilter>
        <TableEpl></TableEpl>
        <Navbar navigate={props.navigate}></Navbar>
      </Card>
    </React.Fragment>
  );
}
export default Epl;
