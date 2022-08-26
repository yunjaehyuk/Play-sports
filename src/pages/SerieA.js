import Card from '../UI/Card';
import React from 'react';
import TableFilter from '../component/Table/TableFilter';
import Navbar from '../layout/Navbar';
import BackHeader from '../layout/BackHeader';
import TableSerieA from '../component/Table/TableSerieA';
function SerieA(props) {

  return(
  <Card>
 <BackHeader navigate={props.naviagte}></BackHeader>
 <TableFilter></TableFilter>
 <TableSerieA></TableSerieA>
</Card>
  )
}
export default SerieA;